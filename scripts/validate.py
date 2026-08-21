#!/usr/bin/env python3
from pathlib import Path
import json, sys

root=Path(__file__).resolve().parents[1]
errors=[]

def load_json(path):
    try:
        return json.loads((root/path).read_text())
    except Exception as e:
        errors.append(f'{path} invalid json: {e}')
        return None

feed=load_json('docs/feed.json') or []
ids=set()
required_feed=[
    'id','folio','title','hook','simple','why_interesting','tangible_edge','why_here',
    'article','lane','primary_domain','story_grammar','evidence_status','discovery_status','read_minutes'
]
allowed_evidence={'ESTABLISHED','CURRENT RESULT','FRONTIER','CONTESTED','FORECAST'}
allowed_discovery={'KNOWN FIELD','NEW SYNTHESIS','DISCOVERY CANDIDATE','NO CLOSE MATCH FOUND','NEW DISCOVERY'}
for i,item in enumerate(feed):
    for key in required_feed:
        if item.get(key) in (None,''):
            errors.append(f'feed[{i}] missing {key}')
    if item.get('id') in ids: errors.append(f'duplicate id {item.get("id")}')
    ids.add(item.get('id'))
    if item.get('article') and not (root/'docs'/item['article']).exists():
        errors.append(f'missing article {item["article"]}')
    if item.get('evidence_status') not in allowed_evidence:
        errors.append(f'feed[{i}] invalid evidence_status {item.get("evidence_status")}')
    if item.get('discovery_status') not in allowed_discovery:
        errors.append(f'feed[{i}] invalid discovery_status {item.get("discovery_status")}')

required_files=[
    'PROJECT_CANONICAL.md','CONTENT_GRAMMAR.md','DESIGN_LANGUAGE.md','RESEARCH_METHOD.md',
    'TOPIC_DISCOVERY.md','AUTOMATION_PROMPT.md','state/automation-state.json',
    'state/topic-ledger.json','state/candidate-archive.json','docs/index.html','docs/app.js','docs/styles.css'
]
for path in required_files:
    if not (root/path).exists(): errors.append(f'missing {path}')

state=load_json('state/automation-state.json') or {}
ledger=load_json('state/topic-ledger.json') or {}
archive=load_json('state/candidate-archive.json') or {}
if state.get('status') not in {'WAITING_FOR_TURN1','TURN1_READY'}:
    errors.append(f'invalid automation status {state.get("status")}')
if state.get('status')=='TURN1_READY':
    p=state.get('pending_report')
    if not p or not (root/p).exists(): errors.append(f'pending report missing: {p}')
if not isinstance(ledger.get('published',[]),list): errors.append('topic-ledger published must be list')
if not isinstance(archive.get('candidates',[]),list): errors.append('candidate-archive candidates must be list')

if errors:
    print('FAIL')
    print('\n'.join('- '+e for e in errors))
    sys.exit(1)
print(f'PASS: {len(feed)} published item(s); v2 structure valid; pipeline={state.get("status")}')
