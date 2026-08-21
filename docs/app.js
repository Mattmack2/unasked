const STORAGE_KEY = 'unasked-feedback-v2';
const legacy = JSON.parse(localStorage.getItem('unasked-feedback-v1') || '{}');
const state = {
  view: 'all',
  domain: 'ALL',
  feedback: JSON.parse(localStorage.getItem(STORAGE_KEY) || JSON.stringify(legacy)),
  items: []
};
const feed = document.querySelector('#feed');
const empty = document.querySelector('#empty');
const domainsBox = document.querySelector('#domain-filter');

function saveFeedback(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state.feedback)); }
function esc(s=''){ return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }
function inline(s=''){
  return esc(s)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/`([^`]+)`/g,'<code>$1</code>')
    .replace(/\*([^*]+)\*/g,'<em>$1</em>');
}
function markdown(md){
  const lines=md.replace(/\r/g,'').split('\n');
  let out='', para=[], inCode=false, code=[], listType=null;
  const closeList=()=>{ if(listType){ out+=`</${listType}>`; listType=null; } };
  const flush=()=>{ if(para.length){ closeList(); out+=`<p>${inline(para.join(' '))}</p>`; para=[]; } };
  for(const line of lines){
    if(line.startsWith('```')){ flush(); closeList(); if(inCode){ out+=`<pre><code>${esc(code.join('\n'))}</code></pre>`; code=[]; } inCode=!inCode; continue; }
    if(inCode){ code.push(line); continue; }
    if(/^---+$/.test(line.trim())){ flush(); closeList(); out+='<hr>'; continue; }
    const h=line.match(/^(#{1,3})\s+(.+)/);
    if(h){ flush(); closeList(); out+=`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`; continue; }
    if(line.startsWith('> ')){ flush(); closeList(); out+=`<blockquote><p>${inline(line.slice(2))}</p></blockquote>`; continue; }
    const ul=line.match(/^[-*]\s+(.+)/); const ol=line.match(/^\d+\.\s+(.+)/);
    if(ul||ol){ flush(); const wanted=ul?'ul':'ol'; if(listType!==wanted){ closeList(); listType=wanted; out+=`<${wanted}>`; } out+=`<li>${inline((ul||ol)[1])}</li>`; continue; }
    if(!line.trim()){ flush(); closeList(); continue; }
    para.push(line.trim());
  }
  flush(); closeList();
  return out;
}
function tagClass(s=''){ return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-'); }
function card(item){
  const fb=state.feedback[item.id]||{};
  return `<article class="feed-card" data-id="${esc(item.id)}" data-domain="${esc(item.primary_domain||'UNCATEGORIZED')}">
    <div class="folio-line">
      <span class="folio">${String(item.folio||1).padStart(2,'0')}</span>
      <div class="card-meta">
        <span>${esc(item.primary_domain||'UNCATEGORIZED')}</span>
        <span>${esc(item.story_grammar||item.lane)}</span>
        <span>${Number(item.read_minutes)||'?'} MIN</span>
      </div>
    </div>
    <h2>${esc(item.title)}</h2>
    <p class="hook">${esc(item.hook)}</p>
    <div class="quick-grid">
      <div class="quick-row"><span class="quick-label">The simple version</span><p>${esc(item.simple||item.hook)}</p></div>
      <div class="quick-row"><span class="quick-label">Why interesting</span><p>${esc(item.why_interesting||item.why_here)}</p></div>
      <div class="quick-row"><span class="quick-label">Tangible edge</span><p>${esc(item.tangible_edge||'Open the field note for concrete examples.')}</p></div>
    </div>
    <p class="appeared"><strong>WHY THIS APPEARED /</strong> ${esc(item.why_here)}</p>
    <div class="status-line">
      <span class="status-tag evidence ${tagClass(item.evidence_status)}">${esc(item.evidence_status||'UNCLASSIFIED')}</span>
      <span class="status-tag discovery ${tagClass(item.discovery_status)}">${esc(item.discovery_status||'KNOWN FIELD')}</span>
      <span class="status-tag">${esc(item.lane)}</span>
    </div>
    <div class="actions">
      <button class="action save ${fb.saved?'saved':''}" data-action="save">${fb.saved?'★ SAVED':'☆ SAVE'}</button>
      <button class="action" data-action="worth">${fb.worth?'✓ WORTH IT':'WORTH IT?'}</button>
      <button class="action" data-action="miss">${fb.miss?'× MARKED MISS':'NOT FOR ME'}</button>
      <button class="action open" data-action="open">OPEN FIELD NOTE ↓</button>
    </div>
    <div class="article" data-article><p class="loading">LOADING FIELD NOTE…</p></div>
  </article>`;
}
function availableItems(){
  let items=state.items;
  if(state.view==='saved') items=items.filter(x=>state.feedback[x.id]?.saved);
  if(state.domain!=='ALL') items=items.filter(x=>(x.primary_domain||'UNCATEGORIZED')===state.domain);
  return items;
}
function render(){
  const items=availableItems();
  feed.innerHTML=items.map(card).join('');
  empty.hidden=items.length>0;
}
function renderDomains(){
  const domains=[...new Set(state.items.map(x=>x.primary_domain||'UNCATEGORIZED'))].sort();
  domainsBox.innerHTML=['ALL',...domains].map((d,i)=>`<button class="domain-button ${state.domain===d?'active':''}" data-domain="${esc(d)}">${String(i+1).padStart(2,'0')} · ${esc(d)}</button>`).join('');
}
async function openArticle(cardEl,item){
  const box=cardEl.querySelector('[data-article]');
  const btn=cardEl.querySelector('[data-action="open"]');
  if(box.dataset.loaded!=='1'){
    try{
      const r=await fetch(item.article);
      if(!r.ok) throw new Error(r.status);
      box.innerHTML=markdown(await r.text());
      box.dataset.loaded='1';
    }catch(e){ box.innerHTML='<p class="loading">FIELD NOTE COULD NOT BE LOADED.</p>'; }
  }
  const now=box.classList.toggle('opened');
  btn.textContent=now?'CLOSE FIELD NOTE ↑':'OPEN FIELD NOTE ↓';
}
feed.addEventListener('click', async e=>{
  const btn=e.target.closest('button[data-action]'); if(!btn) return;
  const cardEl=btn.closest('.feed-card'); const id=cardEl.dataset.id;
  const item=state.items.find(x=>x.id===id); if(!item) return;
  const fb=state.feedback[id]||(state.feedback[id]={});
  const action=btn.dataset.action;
  if(action==='open') return openArticle(cardEl,item);
  if(action==='save') fb.saved=!fb.saved;
  if(action==='worth'){ fb.worth=!fb.worth; if(fb.worth) fb.miss=false; }
  if(action==='miss'){ fb.miss=!fb.miss; if(fb.miss) fb.worth=false; }
  saveFeedback(); render();
});
document.querySelectorAll('.index-row').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.index-row').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active'); state.view=btn.dataset.view; render();
}));
domainsBox.addEventListener('click',e=>{
  const btn=e.target.closest('[data-domain]'); if(!btn) return;
  state.domain=btn.dataset.domain; renderDomains(); render();
});
document.querySelector('#surprise').addEventListener('click',()=>{
  const pool=availableItems(); if(!pool.length) return;
  const item=pool[Math.floor(Math.random()*pool.length)];
  const el=document.querySelector(`[data-id="${CSS.escape(item.id)}"]`); if(el){ el.scrollIntoView({behavior:'smooth',block:'start'}); setTimeout(()=>el.querySelector('[data-action="open"]')?.click(),220); }
});
document.querySelector('#export-feedback').addEventListener('click',()=>{
  const payload=JSON.stringify({exported_at:new Date().toISOString(),feedback:state.feedback},null,2);
  const blob=new Blob([payload],{type:'application/json'}); const a=document.createElement('a');
  a.href=URL.createObjectURL(blob); a.download='unasked-feedback.json'; a.click(); URL.revokeObjectURL(a.href);
});
(async()=>{
  try{
    const r=await fetch('feed.json'); if(!r.ok) throw new Error(r.status);
    state.items=await r.json();
    state.items.sort((a,b)=>String(b.published_at).localeCompare(String(a.published_at)));
    renderDomains(); render();
  }catch(e){ feed.innerHTML='<div class="empty">The journal index could not be loaded.</div>'; }
})();
