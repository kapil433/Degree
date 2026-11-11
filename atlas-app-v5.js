/* Degree Atlas v5 · interactive study environment */
(function(){
"use strict";
const C=window.AtlasCatalog;
if(!C){document.getElementById('app').textContent='Course catalogue unavailable. Refresh this page.';return}
const storeKey='degree-atlas-v5';
let S={};try{S=JSON.parse(localStorage.getItem(storeKey)||'{}')||{}}catch(e){}
try{
const old=JSON.parse(localStorage.getItem('degree-atlas-v2')||'{}');
if(!S.migrated && old && typeof old==='object'){for(const k of Object.keys(old)){if(k.startsWith('book-')||k.startsWith('done-')||k.startsWith('msc-')||k.startsWith('found-')||k.startsWith('a-')||k.startsWith('task-')||k.startsWith('paper-')||['admission','programme','centre','researchNotes','sessions','theme','goal','intention','reflection','weekTarget'].includes(k)){if(S[k]===undefined)S[k]=old[k]}}S.migrated=true;save()}
}catch(e){}
const categories=['Anthropology','Mathematics','Complexity'];
const pages=[['home','Home','⌂'],['anth','Anthropology','◈'],['math','Mathematics','∑'],['complex','Complexity','◎'],['learning','Learning Lab','✦'],['projects','Projects & Labs','⚗'],['alex','Alexandria','▤']];
const focus={
Anthropology:{description:'Human diversity, culture, evolution, ethnography, power and meaning.',open:'IGNOU July 2026 · MAANY',route:'a-main'},
Mathematics:{description:'From undergraduate foundations through MUJ MSc Mathematics and Computational Science.',open:'MUJ MSc · Computational Science',route:'m-main'},
Complexity:{description:'A rigorous bridge between social processes, mathematics and simulation.',open:'Independent interdisciplinary curriculum',route:'c-main'}
};
const learningMethods=[
['Retrieval practice','Retrieve an idea from memory before checking notes. Make the attempt effortful, then correct mistakes.','After every meaningful reading or exercise','https://doi.org/10.1177/1529100612453266','Dunlosky et al. (2013)'],
['Spaced practice','Review on separate days. A short successful retrieval is more useful than rereading everything at once.','Ideas you want to remember for months','https://doi.org/10.1037/0033-2909.132.3.354','Cepeda et al. (2006)'],
['Interleaving','Mix related problem types after first learning each one. Learn when to choose different methods.','Calculus, linear algebra, interpretation and classification','https://doi.org/10.1177/1529100612453266','Dunlosky et al. (2013)'],
['Worked examples','Study a fully explained solution, then solve a similar problem with gradually reduced support.','When mathematical techniques are unfamiliar','https://doi.org/10.1207/s15516709cog1202_4','Sweller (1988)'],
['Self-explanation','Explain why each step or theoretical claim follows rather than copying language.','Proofs, ethnographies, code and papers','https://doi.org/10.1207/s1532690xci1004_1','Chi et al. (1989)'],
['Implementation intentions','Specify a realistic cue, place and action: “After dinner, I solve two proof exercises.”','Busy weeks and long-term habits','https://doi.org/10.1037/0003-066X.54.7.493','Gollwitzer (1999)'],
['Memory palace','Associate a sequence with vivid locations, then mentally walk the route. Useful for ordered facts, not as a replacement for understanding.','Scholars, terminology, classifications','https://doi.org/10.1038/nn988','Maguire et al. (2003)'],
['Metacognition','Check whether you can independently explain and apply a concept; do not equate familiarity with mastery.','Weekly review and exam preparation','https://doi.org/10.1177/1529100612453266','Dunlosky et al. (2013)']
];
const toolsByTopic=[
{words:/graph|network|centrality|cluster|social|mobility/i,name:'Gephi',kind:'Network visualization',url:'https://gephi.org/',why:'Explore network structure and community patterns visually.'},
{words:/research|fieldwork|ethnograph|qualitative|anthropolog|social/i,name:'Zotero',kind:'Reference management',url:'https://www.zotero.org/',why:'Organize citations, annotate PDFs and build bibliographies.'},
{words:/statistics|probability|correlation|linear algebra|analysis/i,name:'Desmos',kind:'Mathematical visualization',url:'https://www.desmos.com/calculator',why:'Experiment with equations and parameter changes.'},
{words:/simulation|agent|complex|system|contagion/i,name:'Mesa (Python)',kind:'Agent-based modelling',url:'https://mesa.readthedocs.io/',why:'Implement inspectable agent-based models in Python.'},
{words:/text|ethnograph|linguistic|NLP|language/i,name:'Voyant Tools',kind:'Text exploration',url:'https://voyant-tools.org/',why:'Explore word frequencies, contexts and textual patterns.'},
{words:/program|algorith|computation|simulation|analysis/i,name:'Observable Plot',kind:'Interactive data graphics',url:'https://observablehq.com/plot/',why:'Design explanatory visualizations for research data.'},
{words:/network|graph|diffusion|contagion|social|mobility|robust|cascad/i,name:'NetworkX',kind:'Python',url:'https://networkx.org/documentation/stable/',why:'Create networks, centrality measures and diffusion experiments.'},
{words:/network|graph|diffusion|contagion|social|segregation|agent|cultural|evolution/i,name:'NetLogo Models Library',kind:'Interactive lab',url:'https://ccl.northwestern.edu/netlogo/models/',why:'Explore social dynamics and agent-based simulation.'},
{words:/differential|dynamic|chaos|stability|bifurcat|equation|calculus|fluid|wave/i,name:'GeoGebra Graphing',kind:'Interactive mathematics',url:'https://www.geogebra.org/graphing',why:'Visualise functions and dynamical relationships.'},
{words:/algebra|linear|matrix|vector|calculus|function|topolog/i,name:'3Blue1Brown',kind:'Video lessons',url:'https://www.3blue1brown.com/',why:'Visual intuition for mathematical structure.'},
{words:/archaeol|evolution|primate|human|biolog/i,name:'Smithsonian Human Origins',kind:'Open educational resource',url:'https://humanorigins.si.edu/',why:'Explore evolution, fossils and evidence.'},
{words:/ethnograph|qualitative|interview|fieldwork|participant|cultur/i,name:'Taguette',kind:'Qualitative analysis',url:'https://www.taguette.org/',why:'Code and analyse research texts using an open-source tool.'},
{words:/simulation|model|python|optimization|numerical|probab|statistic|data|NLP/i,name:'Google Colab',kind:'Programming workspace',url:'https://colab.research.google.com/',why:'Develop reproducible computational notebooks.'},
{words:/resilience|mobility|urban|spatial|infrastruct|environment/i,name:'QGIS',kind:'Geospatial analysis',url:'https://qgis.org/',why:'Map spatial systems and study their inequalities.'},
{words:/paper|research|ethnograph|theor|anthropolog|mathematics|complexity/i,name:'OpenAlex',kind:'Research discovery',url:'https://openalex.org/',why:'Find scholarly publications and related citations.'}
];
const articlePortals={
Anthropology:[['SAPIENS','https://www.sapiens.org/','Accessible reporting and essays on anthropology'],['Society for Cultural Anthropology','https://culanth.org/','Anthropological commentary and theory'],['Anthro Encyclopedia','https://www.anthroencyclopedia.com/','Peer-reviewed thematic introductions'],['Anthropology News','https://www.anthropology-news.org/','Disciplinary reporting and essays'],['Smithsonian Human Origins','https://humanorigins.si.edu/','Human evolutionary science']],
Mathematics:[['Quanta Magazine — Mathematics','https://www.quantamagazine.org/mathematics/','Long-form mathematical journalism'],['Plus Magazine','https://plus.maths.org/','Accessible mathematical essays'],['AMS Feature Column','https://www.ams.org/publicoutreach/feature-column','Historical and conceptual mathematics'],['3Blue1Brown','https://www.3blue1brown.com/','Visual mathematical explanations'],['MIT Mathematics','https://math.mit.edu/','Seminars and mathematical research']],
Complexity:[['Santa Fe Institute','https://www.santafe.edu/news-center','Complexity research news and features'],['Complexity Explorer','https://www.complexityexplorer.org/','Open courses and explainers'],['Quanta — Complexity','https://www.quantamagazine.org/tag/complexity/','Complex-systems reporting'],['Nautilus','https://nautil.us/','Interdisciplinary science essays'],['The Conversation — Science','https://theconversation.com/global/science','Research-informed public scholarship']]
};
const journalTopics={
Anthropology:['Culture and meaning','Human evolution','Kinship and exchange','Fieldwork and ethnography','Political ecology','Tribes in India','Urban mobility','Medical anthropology','Research methods','Social networks'],
Mathematics:['Real analysis','Linear algebra','Algebra and field theory','Topology','Differential equations','Dynamical systems','Fluid dynamics','Optimization','Probability and stochastic processes','Computational science and AI'],
Complexity:['Emergence','Network science','Nonlinear dynamics','Diffusion and contagion','Agent-based modeling','Evolutionary dynamics','Social norms and institutions','Robustness and cascades','Multilayer networks','Mobility transitions']
};
const tasks=[
['adm1','Confirm IGNOU July 2026 admission / enrolment'],
['adm2','Confirm MAANY programme and study centre'],
['adm3','Download session-applicable IGNOU assignments'],
['adm4','Verify assignment submission deadline and mode'],
['adm5','Verify examination form, payment and hall ticket'],
['adm6','Check IGNOU grade card after evaluation'],
['adm7','Check MUJ LMS course registration and assessment calendar'],
['adm8','Confirm Computational Science elective registration'],
['adm9','Verify MUJ examination and graphic-tablet requirements']
];
const el=id=>document.getElementById(id);
const esc=value=>String(value===undefined||value===null?'':value).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','"':'&quot;',"'":'&#39;'}[x]));
function save(){try{localStorage.setItem(storeKey,JSON.stringify(S))}catch(e){}}
function set(k,v){S[k]=v;save()}
function url(u){try{const p=new URL(u);return /^https?:$/.test(p.protocol)?p.href:''}catch(e){return''}}
const link=(u,label,cl='minor-link')=>url(u)?'<a href="'+esc(url(u))+'" class="'+cl+'" target="_blank" rel="noopener noreferrer">'+esc(label)+' <span aria-hidden="true">↗</span></a>':'';
const badge=(x,cls='')=>'<span class="tag '+cls+'">'+esc(x)+'</span>';
function countDone(c){return c.filter(x=>completed(x)).length}
function completed(c){return !!(S['finish:'+c.id]||S['done-'+c.id]||S['msc-'+c.id]||S['found-'+c.id])}
function markCourse(id,value){set('finish:'+id,value);const c=C.courses.find(x=>x.id===id);if(c){const key=c.tag==='MUJ MSc'?'msc-':c.tag==='Undergraduate bridge'?'found-':'done-';set(key+id,value)}paint()}
function bookState(b){return S['book-'+b.id]||'To read'}
function cardsFor(field){return C.courses.filter(x=>x.discipline===field)}
function routeName(field){return field==='Mathematics'?'math':field==='Anthropology'?'anth':'complex'}
function savedCount(field){return C.books.filter(x=>x.discipline===field&&bookState(x)==='Finished').length}
function paragraphs(label,value){return '<div class="labelpair"><span>'+esc(label)+'</span><strong>'+esc(value)+'</strong></div>'}
function nav(){el('side').innerHTML='<div class="identity"><div class="logo">D<span>.</span></div><div><strong>Degree Atlas</strong><small>Learn · Explore · Create</small></div></div><div class="navblock">'+pages.map(x=>'<a href="#'+x[0]+'" data-nav="'+x[0]+'" class="'+(page===x[0]?'selected':'')+'"><span class="nav-icon">'+x[2]+'</span>'+x[1]+'</a>').join('')+'</div><div class="sidefoot"><span>YOUR INTELLECTUAL ATLAS</span><p>Anthropology × Mathematics × Complexity</p>'+link(C.official.github,'Source code')+'</div>';el('bottom').innerHTML=pages.map(x=>'<a href="#'+x[0]+'" data-nav="'+x[0]+'" class="'+(page===x[0]?'selected':'')+'"><span>'+x[2]+'</span><small>'+x[1]+'</small></a>').join('')}
let page='home',tab='',selectedCourse='',activeTopic='',bookRoute='',libraryFilter='all',paperView='papers',paperQuery='',paperData={},flashReveal=false;
function go(to){const hash=to.startsWith('#')?to:'#'+to;if(location.hash!==hash)location.hash=hash;else route()}
function route(){const fragments=decodeURIComponent((location.hash||'#home').slice(1)).split('/');page=pages.some(x=>x[0]===fragments[0])?fragments[0]:'home';tab=fragments[1]||'';selectedCourse=fragments[2]||'';activeTopic='';paperQuery='';paint();window.scrollTo(0,0)}
function setTab(next){go(page+'/'+next)}
function setCourse(id){go(page+'/courses/'+id)}
function head(kicker,title,desc){return '<header class="page-header"><div class="eyebrow">'+esc(kicker)+'</div><h1>'+esc(title)+'</h1><p>'+esc(desc)+'</p></header>'}
function section(title,meta=''){return '<div class="sectionheading"><h2>'+esc(title)+'</h2>'+(meta?'<span>'+esc(meta)+'</span>':'')+'</div>'}
function tabbar(items){return '<nav class="subnav" aria-label="Section views">'+items.map(([k,n])=>'<a href="#'+page+'/'+k+'" class="'+(tab===k||(!tab&&k===items[0][0])?'active':'')+'">'+esc(n)+'</a>').join('')+'</nav>'}
function panel(content,extra=''){return '<div class="panel '+extra+'">'+content+'</div>'}
function statusLabel(status){return status==='Completed'||status==='Finished'?'success':status==='Reading'?'progress':''}
function progress(field){const c=cardsFor(field),done=countDone(c);return c.length?Math.round(100*done/c.length):0}
function home(){
let h='<div class="welcome"><div class="eyebrow">YOUR ACADEMIC WORLD</div><h1>Make knowledge <em>connect.</em></h1><p>Learn carefully. Follow the great ideas. Test them in the world. Build work that lasts.</p><div class="hero-actions"><button class="btn light" onclick="Atlas.go(\'math/foundations\')">Continue Mathematics</button><button class="btn ghost" onclick="Atlas.go(\'anth/courses\')">Explore Anthropology</button></div></div>';
h+=section('Your learning spaces','Across three disciplines')+'<div class="metricgrid">'+categories.map((x,i)=>panel('<div class="eyebrow">'+esc(x)+'</div><div class="metric">'+progress(x)+'<small>%</small></div><div class="track"><i style="width:'+progress(x)+'%"></i></div><p class="muted">'+countDone(cardsFor(x))+' of '+cardsFor(x).length+' course and topic milestones marked complete</p><button class="textbutton" onclick="Atlas.go(\''+routeName(x)+'/courses\')">Explore '+esc(x)+' →</button>','metriccard')).join('')+'</div>';
h+=section('Choose a direction')+'<div class="featuregrid">'+[
['Learn','Select a course, explore its real topics, and find a primary book or open course.','anth/courses','◈'],
['Explore','Follow an ordered reading journey or discover literature around a research question.','math/books','∑'],
['Experiment','Run a diffusion experiment, open a modelling lab, or write structured fieldnotes.','projects/labs','⚗'],
['Create','Develop an interdisciplinary research question, methods and a prototype.','projects/studio','◎']
].map(x=>panel('<div class="feature-icon">'+x[3]+'</div><h3>'+x[0]+'</h3><p>'+x[1]+'</p><button class="textbutton" onclick="Atlas.go(\''+x[2]+'\')">Open →</button>')).join('')+'</div>';
h+=section('Today’s academic focus')+'<div class="duogrid">'+panel('<h3>Study routine</h3><p>Plan around coursework, deliberate practice, reading and independent research.</p><div class="mini-stat">'+(S.sessions||[]).reduce((a,b)=>a+(Number(b.minutes)||0),0)+' <span>total recorded minutes</span></div><button class="btn" onclick="Atlas.go(\'learning/plan\')">Open weekly plan</button>')+panel('<h3>Academic accuracy</h3><p>Your IGNOU application does not imply confirmed enrolment. Assessment deadlines must come from your own programme notices or LMS.</p>'+link(C.official.ignouAssignments,'Official IGNOU assignments')+link(C.official.muJPPR,'MUJ official curriculum') )+'</div>';
return h;
}
function fieldFromPage(){return page==='anth'?'Anthropology':page==='math'?'Mathematics':'Complexity'}
function discipline(){
const field=fieldFromPage(),f=focus[field];
const tabs=[['courses','Courses & topics'],['books','Reading routes'],['research','Research'],['essays','Essays & media'],['admin','Planner']];
if(field==='Complexity')tabs.pop();
let h=head(f.open,field,f.description)+tabbar(tabs);
if(!tab||tab==='courses')h+=courseList(field);
if(tab==='books')h+=readingRoutes(field);
if(tab==='research')h+=researchView(field);
if(tab==='essays')h+=essaysView(field);
if(tab==='admin')h+=academicPlanner(field);
return h;
}
function cLabel(c){return c.tag==='MUJ MSc'?'Semester '+c.term:c.tag==='IGNOU MAANY'?'Semester '+c.term:c.tag==='Undergraduate bridge'?'Foundations':'Research topic'}
function courseList(field){
const courses=cardsFor(field);
if(selectedCourse){const c=courses.find(x=>x.id===selectedCourse);if(c)return courseDetail(c)}
let h=field==='Mathematics'?panel('<div class="eyebrow">A CLEAR LEARNING SEQUENCE</div><h3>Start with undergraduate mathematics, then advance to the MUJ MSc.</h3><p>Foundations are independent preparation, not credits. The chosen MSc elective path is <b>Computational Science</b>; university registration must be verified in MUJ.</p>','notice'):field==='Anthropology'?panel('<div class="eyebrow">IGNOU · JULY 2026</div><p>Official MAANY titles and credits are shown alongside independently curated broad topics and supplementary references. Check your enrolment and centre before relying on administrative dates.</p>','notice'):panel('<div class="eyebrow">INDEPENDENT CURRICULUM</div><p>Twelve research-oriented topics connect mathematics and anthropology through systems theory, networks, dynamical models and simulation.</p>','notice');
h+='<div class="filters"><input id="course-search" class="input grow" placeholder="Search course or topic" value="'+esc(S['courseSearch:'+field]||'')+'" oninput="Atlas.searchCourse(this.value)"><select class="input" id="course-stage" onchange="Atlas.stage(this.value)">'+(field==='Mathematics'?[['all','All levels'],['0','Undergraduate preparation'],['1','MSc semester 1'],['2','MSc semester 2'],['3','MSc semester 3'],['4','MSc semester 4']]:field==='Anthropology'?[['all','All semesters'],['1','Semester 1'],['2','Semester 2'],['3','Semester 3'],['4','Semester 4']]:[['all','All topics']]).map(x=>'<option value="'+x[0]+'" '+((S['stage:'+field]||'all')===x[0]?'selected':'')+'>'+x[1]+'</option>').join('')+'</select></div>';
const q=(S['courseSearch:'+field]||'').toLowerCase(),stage=S['stage:'+field]||'all';
const matches=courses.filter(c=>(stage==='all'||String(c.term)===stage)&&(!q||(c.title+' '+c.id+' '+c.topics.join(' ')).toLowerCase().includes(q)));
if(!matches.length)return h+panel('<p>No courses match. Clear your filters.</p>');
h+='<div class="coursegrid">'+matches.map(c=>'<button class="courseitem" onclick="Atlas.course(\''+c.id+'\')"><div class="course-top"><span class="mono">'+esc(c.id)+'</span>'+badge(cLabel(c))+'</div><h3>'+esc(c.title)+'</h3><p>'+esc(c.topics.slice(0,3).join(' · '))+'</p><div class="course-bottom"><span>'+esc(c.book||'Open resource available')+'</span><span class="arrow">↗</span></div></button>').join('')+'</div>';
return h;
}
function courseDetail(c){
let h='<button class="back" onclick="Atlas.go(\''+page+'/courses\')">← All courses</button>';
h+='<div class="detailhead"><div class="eyebrow">'+esc(c.tag)+' · '+esc(c.id)+' · '+esc(cLabel(c))+'</div><h2>'+esc(c.title)+'</h2><p>'+esc(c.description)+'</p><label class="check"><input type="checkbox" '+(completed(c)?'checked':'')+' onchange="Atlas.mark(\''+c.id+'\',this.checked)"> Mark learning milestone complete</label></div>';
h+=section('Core topics','Explore the broad themes in this course')+'<div class="chiprow">'+c.topics.map(x=>'<button class="topicchip" onclick="Atlas.topic('+JSON.stringify(x).replace(/"/g,'&quot;')+')">'+esc(x)+' ↗</button>').join('')+'</div>';
if(activeTopic)h+=panel('<div class="eyebrow">SELECTED TOPIC</div><h3>'+esc(activeTopic)+'</h3><p>Explore scholarship, accessible explanations and related labs for this topic.</p><div class="actionrow"><button class="btn primary" onclick="Atlas.go(\''+page+'/research\')">Find research papers</button><button class="btn" onclick="Atlas.go(\''+page+'/essays\')">Essays & lectures</button></div>');
h+=section('Where to learn','One primary text and one open learning resource')+'<div class="duogrid">'+panel('<div class="resource-kicker">PRIMARY REFERENCE</div><h3>'+esc(c.book||'Reference pending selection')+'</h3><p>'+esc(c.author||'Choose an open educational starting point')+'</p><p>'+esc(c.note||'Recommended as a supplementary starting point; consult the official syllabus for scope.')+'</p>'+link('https://openlibrary.org/search?q='+encodeURIComponent(c.book+' '+c.author),'Find book / edition'))+panel('<div class="resource-kicker">OPEN LEARNING</div><h3>Open course or reputable learning collection</h3><p>When a close course match is unavailable, this link is a relevant open resource—not a verified full-syllabus equivalent.</p>'+link(c.open,'Explore resource'))+'</div>';
h+=section('Discover beyond the course','Connect concepts with research, media and tools')+'<div class="featuregrid">'+panel('<div class="feature-icon">⌕</div><h3>Research papers</h3><p>Search primary scholarship about '+esc(c.topics[0]||c.title)+'.</p><button class="textbutton" onclick="Atlas.discover(\''+page+'\',\''+esc(c.topics[0]||c.title).replace(/'/g,'&#39;')+'\',\'research\')">Explore papers →</button>')+panel('<div class="feature-icon">▤</div><h3>Essays & articles</h3><p>Public-facing essays and explanatory reading in this area.</p><button class="textbutton" onclick="Atlas.discover(\''+page+'\',\''+esc(c.topics[0]||c.title).replace(/'/g,'&#39;')+'\',\'essays\')">Explore essays →</button>')+panel('<div class="feature-icon">⚗</div><h3>Interesting labs</h3><p>Relevant simulations, videos and practical environments.</p><button class="textbutton" onclick="Atlas.go(\'projects/labs\')">Open lab →</button>')+'</div>';
h+=section('Practical tools and lectures')+toolCards(c.topics.join(' '),4);
if(c.tag==='IGNOU MAANY')h+=panel('<h3>Official university resources</h3><p>Use these central links to confirm unit content, assignment applicability and examination instructions.</p><div class="links">'+link(C.official.ignouGuide,'MAANY programme guide')+link(C.official.ignouAssignments,'Assignment notices')+'</div>');
if(c.tag==='MUJ MSc')h+=panel('<h3>Official MSc syllabus</h3><p>Course title, code, credits and the Computational Science elective pathway follow the MUJ programme documentation. Assessment dates are set in the LMS.</p>'+link(C.official.muJPPR,'Detailed official MUJ syllabus'));
return h;
}
function toolCards(text,limit=6){
const relevant=toolsByTopic.filter(x=>x.words.test(text));
if(!relevant.length)relevant.push(toolsByTopic[8],toolsByTopic[6]);
return '<div class="toolgrid">'+relevant.slice(0,limit).map(x=>panel('<div class="resource-kicker">'+esc(x.kind)+'</div><h3>'+esc(x.name)+'</h3><p>'+esc(x.why)+'</p>'+link(x.url,'Open tool'))).join('')+'</div>';
}
function readingRoutes(field){
const routes=C.routes.filter(r=>r.field===field);
if(!routes.some(r=>r.id===bookRoute))bookRoute=routes[0].id;
let h=panel('<div class="eyebrow">THE READING JOURNEY</div><h3>Each sequence has a reason.</h3><p>These are ordered routes, not a demand to read every book cover to cover. Move forward when you can explain and apply the central ideas. Follow a side branch when a course or research question needs it.</p>','notice');
h+='<div class="route-switch">'+routes.map(r=>'<button class="'+((bookRoute||routes[0].id)===r.id?'on':'')+'" onclick="Atlas.bookRoute(\''+r.id+'\')">'+esc(r.name)+'</button>').join('')+'</div>';
const r=routes.find(x=>x.id===(bookRoute||routes[0].id))||routes[0];const b=r.ids.map(id=>C.books.find(x=>x.id===id)).filter(Boolean);
h+=section(r.name,b.length+' books in recommended order')+'<p class="desc">'+esc(r.intent)+'</p>';
h+='<div class="readingpath">'+b.map((x,i)=>'<div class="readstep"><div class="readnum">'+String(i+1).padStart(2,'0')+'</div><div class="readbody"><div class="eyebrow">'+(/fiction/i.test(x.genre)?'LITERARY COMPANION':i===0?'BEGIN HERE':i<b.length/3?'FOUNDATION':i<2*b.length/3?'DEVELOP YOUR FRAMEWORK':'ADVANCED / SPECIALIST')+'</div><h3>'+esc(x.title)+'</h3><p class="muted">'+esc(x.author)+'</p><p>'+esc(x.why)+'</p><div class="stepfoot"><span>'+(i===0?'Build your entry point.':i===b.length-1?'Use this to develop independent research questions.':'Next: '+esc(b[i+1].title))+'</span><div><select aria-label="Reading status" onchange="Atlas.set(\''+'book-'+x.id+'\',this.value)">'+['To read','Reading','Finished'].map(t=>'<option '+(bookState(x)===t?'selected':'')+'>'+t+'</option>').join('')+'</select>'+link(x.url||'https://openlibrary.org/search?q='+encodeURIComponent(x.title+' '+x.author),'Locate edition')+'</div></div></div></div>').join('')+'</div>';
h+=section('Explore the rest of the shelves','Supplementary works outside the selected route');
const inRoute=new Set(b.map(x=>x.id));const other=C.books.filter(x=>x.discipline===field&&!inRoute.has(x.id));
h+='<div class="shelfgrid">'+other.map(x=>panel('<span class="eyebrow">SUPPLEMENTARY</span><h3>'+esc(x.title)+'</h3><p>'+esc(x.author)+'</p><p>'+esc(x.why)+'</p>'+link(x.url||'https://openlibrary.org/search?q='+encodeURIComponent(x.title+' '+x.author),'Find edition'))).join('')+'</div>';
return h;
}
function researchView(field){
const topics=journalTopics[field]||[];
let h=panel('<div class="eyebrow">RESEARCH DISCOVERY</div><h3>Follow a question, not an arbitrary ranking.</h3><p>Curated landmark readings are shown separately from live scholarly-database discovery. Retrieved items carry publisher/DOI links and their original bibliographic metadata. Check relevance and full text before using them in research.</p>','notice');
h+='<div class="filters"><input class="input grow" id="research-q" placeholder="Search a concept or research question" value="'+esc(paperQuery||S['query:'+field]||topics[0])+'"><button class="btn primary" onclick="Atlas.searchPapers()">Discover papers</button></div><div class="chiprow">'+topics.map(t=>'<button class="topicchip" onclick="Atlas.researchTopic('+JSON.stringify(t).replace(/"/g,'&quot;')+')">'+esc(t)+'</button>').join('')+'</div>';
const seed=C.initialRead.filter(x=>x.domain===field&&x.type==='paper');
h+=section('Curated starting points',seed.length+' source-linked entries')+'<div class="articlelist">'+seed.map(x=>panel('<div class="paper-meta">'+badge(String(x.year))+' '+badge(x.topic||'Research')+'</div><h3>'+esc(x.title)+'</h3><p>'+esc(x.authors)+'</p>'+link(x.url,'Open source / publisher'))).join('')+'</div>';
h+=section('Live scholarly discovery','External database · updates on request');
h+='<div id="livepapers" class="live-results">'+(paperData[field]?.html||'<div class="empty-state"><span>⌕</span><h3>Search the scholarly literature</h3><p>Choose a topic and tap Discover papers. Results depend on external OpenAlex access and are not stored as a pre-verified 100-paper list.</p></div>')+'</div>';
return h;
}
function researchResult(x){
const authors=(x.authorships||[]).slice(0,5).map(a=>a.author?.display_name).filter(Boolean).join(', ');
const venue=x.primary_location?.source?.display_name||x.best_oa_location?.source?.display_name||'Research publication';
const uri=x.doi||x.primary_location?.landing_page_url||x.id||'';
const label=Number(x.cited_by_count||0).toLocaleString('en-US')+' citations (database)';
return panel('<div class="paper-meta">'+badge(x.publication_year||'n.d.')+' '+badge(x.type||'work')+'</div><h3>'+esc(x.title||'Untitled work')+'</h3><p>'+esc(authors)+'</p><div class="paper-foot">'+esc(venue)+' · '+esc(label)+'</div>'+link(uri,'View paper / DOI'));
}
async function fetchResearch(field,query){
const target=el('livepapers');if(!target)return;
target.innerHTML=panel('<p>Searching scholarly metadata for “'+esc(query)+'”...</p>');
const urlAPI='https://api.openalex.org/works?search='+encodeURIComponent(query)+'&filter=type:article&per-page=100&sort=cited_by_count:desc&select=id,title,publication_year,doi,type,cited_by_count,authorships,primary_location,best_oa_location';
try{
const res=await fetch(urlAPI,{headers:{Accept:'application/json'}});if(!res.ok)throw new Error('OpenAlex returned HTTP '+res.status);
const data=await res.json();const works=(data.results||[]).filter(x=>x.title);
if(!works.length)throw new Error('No matching records were returned');
const html=panel('<strong>'+works.length+' scholarly works retrieved</strong><p>Ranked by citation count in the live database; use the title, methods and topic to judge relevance. This is discovery, not a verified “best 100” bibliography.</p>')+'<div class="articlelist">'+works.map(researchResult).join('')+'</div>';
paperData[field]={html,query};target.innerHTML=html;
}catch(err){target.innerHTML=panel('<h3>Live discovery unavailable</h3><p>'+esc(err.message)+'. The curated reading links above remain available.</p>'+link('https://openalex.org/works?search='+encodeURIComponent(query),'Search OpenAlex directly')+link('https://scholar.google.com/scholar?q='+encodeURIComponent(query),'Search Google Scholar'))}
}
function essaysView(field){
const topics=journalTopics[field]||[],providers=articlePortals[field];
const chosen=S['essayTopic:'+field]||topics[0];
let h=panel('<div class="eyebrow">ESSAYS, ARTICLES, VIDEOS</div><h3>Accessible writing around the big ideas.</h3><p>Explore reputable publications and open courses by topic. These are source collections, not an invented list of 100 individually verified article titles. Papers remain separate in the Research view.</p>','notice');
h+=section('Choose a theme')+'<div class="chiprow">'+topics.map(x=>'<button class="topicchip" onclick="Atlas.setEssayTopic('+JSON.stringify(x).replace(/"/g,'&quot;')+')">'+esc(x)+'</button>').join('')+'</div>';
h+=panel('<div class="eyebrow">FOCUS TOPIC</div><h3>'+esc(chosen)+'</h3><p>Explore quality essays, explainers and open university resources. Use publication-site searches for the exact topic.</p><div class="actionrow">'+link('https://www.google.com/search?q='+encodeURIComponent((chosen)+' site:quantamagazine.org OR site:sapiens.org OR site:plus.maths.org OR site:santafe.edu'),'Search essays on topic')+link('https://www.youtube.com/results?search_query='+encodeURIComponent((chosen)+' university lecture'),'Find lectures')+'</div>');
h+=section('Explore trusted publications')+'<div class="toolgrid">'+providers.map(x=>panel('<h3>'+esc(x[0])+'</h3><p>'+esc(x[2])+'</p>'+link(x[1],'Explore publication'))).join('')+'</div>';
h+=section('Related labs and videos')+toolCards(chosen);
return h;
}
function academicPlanner(field){
const t=field==='Anthropology'?tasks.slice(0,6):tasks.slice(6);
let h=panel('<div class="eyebrow">ADMINISTRATION AND DEADLINES</div><p>These fields are personal records, not live enrolment-status feeds. Enter dates only after checking the university portal, a matching assignment PDF or the LMS.</p>','notice');
h+=section('Important official sources')+'<div class="links">'+(field==='Anthropology'?link(C.official.ignou,'MAANY programme')+link(C.official.ignouAssignments,'Assignment portal')+link(C.official.ignouGuide,'Programme guide'):link(C.official.muJPPR,'MUJ syllabus')+link(C.official.muJ,'Programme and assessments'))+'</div>';
h+=section('Administrative checklist')+panel(t.map(x=>'<label class="taskline"><input type="checkbox" '+(S['task-'+x[0]]?'checked':'')+' onchange="Atlas.set(\'task-'+x[0]+'\',this.checked)"><span>'+esc(x[1])+'</span></label>').join(''));
h+=section('Assignment and assessment tracking')+panel('<div class="planner-list">'+C.courses.filter(x=>x.discipline===field&&x.term>0&&x.term<3).map(c=>'<div class="plan-row"><div><strong>'+esc(c.id)+'</strong><small>'+esc(c.title)+'</small></div><select aria-label="Assignment state" onchange="Atlas.set(\'a-status-'+c.id+'\',this.value)">'+['Not started','Reading','Drafting','Reviewing','Ready','Submitted','Evaluated'].map(x=>'<option '+((S['a-status-'+c.id]||'Not started')===x?'selected':'')+'>'+x+'</option>').join('')+'</select><input aria-label="Verified due date" type="date" value="'+esc(S['a-due-'+c.id]||'')+'" onchange="Atlas.set(\'a-due-'+c.id+'\',this.value)"></div>').join('')+'</div>');
return h;
}
function learnLab(){
let h=head('THE SCIENCE OF LEARNING','Learn better, remember longer','Evidence-grounded methods for mathematics, ethnography, difficult reading and long-term research.')+tabbar([['methods','Learning methods'],['practice','Recall & review'],['routine','Study routine']]);
if(!tab||tab==='methods')h+=section('Methods and their research foundations')+'<div class="toolgrid">'+learningMethods.map(x=>panel('<div class="eyebrow">METHOD</div><h3>'+x[0]+'</h3><p>'+x[1]+'</p><p class="muted"><b>Use when:</b> '+x[2]+'</p>'+link(x[3],'Research · '+x[4]))).join('')+'</div>';
if(tab==='practice')h+=recallLab();
if(tab==='routine')h+=routineLab();
return h;
}
const questions=[
['m1','Mathematics','Explain why an eigenvector retains its direction under a linear transformation.','Begin with Av=λv; distinguish eigenvalue and vector.'],
['m2','Mathematics','What is the difference between a pointwise and a uniform convergence claim?','Uniform convergence chooses the same error bound index for every point.'],
['a1','Anthropology','What is thick description, and what evidence would it require?','Distinguish an observed action from situated social meaning.'],
['a2','Anthropology','Why is reflexivity essential to ethnographic fieldwork?','Consider positionality, observer influence and interpretation.'],
['c1','Complexity','Why can clustered networks promote complex contagion?','Repeated social reinforcement can matter more than shortcuts.'],
['c2','Complexity','What is the difference between a model assumption and an empirical observation?','Observations are measured; assumptions shape the model structure.']
];
function dueQ(id){const x=S['review:'+id];return !x||!x.date||x.date<=new Date().toISOString().slice(0,10)}
function recallLab(){
const due=questions.filter(x=>dueQ(x[0]));
let h=panel('<h3>Active recall queue</h3><p>Try to answer from memory. Reveal the hint only after attempting an answer; schedule the next review based on your own judgement.</p>');
h+='<div class="toolgrid">'+(due.length?due.map(x=>panel(badge(x[1])+'<h3>'+x[2]+'</h3><details><summary>Reveal a hint</summary><p>'+x[3]+'</p></details><div class="actionrow"><button class="btn" onclick="Atlas.grade(\''+x[0]+'\',false)">Revisit tomorrow</button><button class="btn primary" onclick="Atlas.grade(\''+x[0]+'\',true)">Recalled → schedule</button></div>')).join(''):panel('<h3>No scheduled prompts due</h3><p>Return on the next review date, or make new study notes.'))+'</div>';
h+=section('Error journal')+panel('<textarea id="error-notes" placeholder="What did I misunderstand? How will I test the correction?" onchange="Atlas.set(\'errorJournal\',this.value)">'+esc(S.errorJournal||'')+'</textarea>');
return h;
}
function routineLab(){
const mins=(S.sessions||[]).reduce((a,x)=>a+(Number(x.minutes)||0),0),plan=['MON · Mathematics foundations','TUE · IGNOU core reading','WED · Mathematical exercises','THU · Anthropology and ethnography','FRI · Research paper or coding lab','SAT · MUJ coursework and practice','SUN · Revision and weekly planning'];
let h='<div class="duogrid">'+panel('<div class="eyebrow">TOTAL LOGGED STUDY TIME</div><div class="metric">'+(mins/60).toFixed(1)+' <small>hours</small></div><p>This tracks recorded study time only, not learning mastery.</p><div class="actionrow"><input type="number" min="5" max="600" value="45" id="log-time" class="input small"><button class="btn primary" onclick="Atlas.logTime()">Log minutes</button></div>')+panel('<h3>Implementation intention</h3><p>Write a concrete when-and-where plan for your next session.</p><textarea onchange="Atlas.set(\'intention\',this.value)">'+esc(S.intention||'After dinner I will study for 45 minutes at my desk.')+'</textarea>')+'</div>';
h+=section('Weekly study rhythm')+panel(plan.map((x,i)=>'<label class="taskline"><input type="checkbox" '+(S['week:'+i]?'checked':'')+' onchange="Atlas.set(\'week:'+i+'\',this.checked)"><span>'+x+'</span></label>').join('')+'<button class="btn" onclick="Atlas.resetWeek()">Reset weekly checkmarks</button>');
return h;
}
function projectLab(){
let h=head('THE INTERDISCIPLINARY LAB','Experiment, model, create','Practice with interactive simulations and structured research projects.')+tabbar([['labs','Interactive labs'],['studio','Research studio'],['tools','Toolbox']]);
if(!tab||tab==='labs')h+=simulationLab();
if(tab==='studio')h+=studio();
if(tab==='tools')h+=section('Tools that turn ideas into experiments')+toolCards('network graph diffusion agent model mathematics differential archaeology ethnography research python spatial statistics',10);
return h;
}
function simulationLab(){
return section('Interactive diffusion simulator','Explore a simple threshold-adoption model')+panel('<p>Explore how local peer reinforcement can produce a larger adoption cascade. This is an educational toy model, not a calibrated empirical prediction.</p><div class="duogrid"><div><div class="simulation" id="simnodes"></div><div class="legend"><span><i class="adopt"></i> Adopted</span><span><i class="notadopt"></i> Not adopted</span></div></div><div class="simcontrols"><label>Adoption threshold <b id="threshold-value">2</b> neighbours<input type="range" min="1" max="5" value="2" id="simthreshold" oninput="Atlas.simRange(this.value)"></label><label>Initial seeds <b id="seed-value">4</b><input type="range" min="1" max="15" value="4" id="simseed" oninput="Atlas.simSeeds(this.value)"></label><div class="actionrow"><button class="btn primary" onclick="Atlas.simStep()">Advance one step</button><button class="btn" onclick="Atlas.simReset()">Reset</button></div><p id="simstats" class="muted"></p><p class="caption">Regular local contacts on a 12 × 9 lattice, with a few shortcuts. Thresholds and seed counts are user-selected; no real-world calibration.</p></div></div>')+section('Related experiments','Discover more tools')+toolCards('networks agent diffusion dynamics',5);
}
function studio(){
const proposals=[
['Social networks and vehicle adoption','Combine field interviews with consented network data and threshold-diffusion experiments.','MAN-108 · MANE-107 · CX05 · DMMEC2'],
['Urban mobility resilience','Compare observed transport vulnerabilities with graph-robustness simulation.','MANE-107 · CX08 · DMMEC2'],
['Energy transition ethnography','Study infrastructure, household trust and institutional incentives using political ecology.','MAN-107 · MAN-109 · CX11'],
['Computational ethnography toolkit','Prototype ethical qualitative coding and network-based theme exploration.','MANE-105 · DMMEC4 · CX07'],
['Institutional and norm evolution','Investigate how local coordination rules create persistent social structures.','MAN-103 · CX06 · CX11']
];
return section('Ambitious research ideas','Each idea must be tested against the literature before claiming novelty')+'<div class="toolgrid">'+proposals.map((x,i)=>panel('<div class="eyebrow">PROJECT '+String(i+1).padStart(2,'0')+'</div><h3>'+x[0]+'</h3><p>'+x[1]+'</p>'+badge(x[2])+'<div class="actionrow"><button class="btn" onclick="Atlas.projectNote('+i+')">Develop idea</button></div>')).join('')+'</div>'+section('Your research notebook')+panel('<textarea id="projectnotes" onchange="Atlas.set(\'projectNotes\',this.value)" placeholder="Question, methods, assumptions, evidence, ethical concerns, datasets, prototype…">'+esc(S.projectNotes||'')+'</textarea><p class="caption">Notes are saved in this browser. Export a backup before changing devices.</p>');
}
function alex(){
return head('PERSONAL READING UNIVERSE','Alexandria Library','Explore literature, ideas and intellectual history alongside the formal degree curricula.')+panel('<div class="alex-card"><div><div class="eyebrow">OPEN YOUR LIBRARY</div><h2>Alexandria</h2><p>Browse your separate library and return to Degree Atlas when you want to connect a book to mathematics, anthropology or complexity.</p><div class="actionrow">'+link(C.official.alex,'Launch Alexandria','btn primary')+link('https://github.com/kapil433/Alexandria','View source','btn')+'</div></div><div class="library-shape">A</div></div>')+section('Reading progress across the atlas')+'<div class="metricgrid">'+categories.map(x=>panel('<div class="eyebrow">'+x+'</div><div class="metric">'+savedCount(x)+'</div><p>Books marked Finished</p>')).join('')+'</div>';
}
function paint(){
document.title=(pages.find(x=>x[0]===page)?.[1]||'Degree Atlas')+' · Degree Atlas';
nav();let html='';
if(page==='home')html=home();else if(['anth','math','complex'].includes(page))html=discipline();else if(page==='learning')html=learnLab();else if(page==='projects')html=projectLab();else html=alex();
el('app').innerHTML=html+'<footer><span>Degree Atlas · Independent academic companion · Data saved locally</span><span>University deadlines and registration must be confirmed in the official portals.</span></footer>';
if(page==='projects'&&(!tab||tab==='labs'))simDraw();
}
function searchCourse(v){set('courseSearch:'+fieldFromPage(),v);const input=el('course-search');const p=input?.selectionStart;paint();const next=el('course-search');if(next){next.focus();next.setSelectionRange(p,p)}}
function setStage(v){set('stage:'+fieldFromPage(),v);paint()}
function showTopic(value){activeTopic=value;paint()}
function discover(fieldPage,topic,type){const field=fieldPage==='math'?'Mathematics':fieldPage==='anth'?'Anthropology':'Complexity';set('query:'+field,topic);set('essayTopic:'+field,topic);paperQuery=topic;go(fieldPage+'/'+type)}
function topicSearch(t){paperQuery=t;const x=el('research-q');if(x)x.value=t;fetchResearch(fieldFromPage(),t)}
function essayTopic(t){set('essayTopic:'+fieldFromPage(),t);activeTopic=t;paint()}
function searchPapers(){const input=el('research-q');const q=input?.value.trim()||'network science';set('query:'+fieldFromPage(),q);paperQuery=q;fetchResearch(fieldFromPage(),q)}
function rate(id,good){const x=S['review:'+id]||{n:0};const n=good?Math.min(5,x.n+1):0,interval=[1,1,3,7,14,30][n],d=new Date();d.setDate(d.getDate()+interval);set('review:'+id,{n,date:d.toISOString().slice(0,10)});paint()}
function logTime(){const x=Number(el('log-time')?.value);if(!Number.isFinite(x)||x<5||x>600){alert('Enter 5–600 minutes.');return}const a=Array.isArray(S.sessions)?S.sessions:[];a.push({minutes:x,date:new Date().toISOString().slice(0,10)});set('sessions',a);paint()}
function resetWeek(){for(let i=0;i<7;i++)set('week:'+i,false);paint()}
function projectNote(i){const title=['Social networks and vehicle adoption','Urban mobility resilience','Energy transition ethnography','Computational ethnography toolkit','Institutional and norm evolution'][i];set('projectNotes',(S.projectNotes||'')+'\n\n'+title+'\nQuestion:\nEvidence:\nMethods:\nPrototype:\nLimitations:\n');paint()}
function backup(){const a=document.createElement('a');const blob=new Blob([JSON.stringify({version:5,exportDate:new Date().toISOString(),data:S},null,2)],{type:'application/json'});const u=URL.createObjectURL(blob);a.href=u;a.download='degree-atlas-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),2500)}
function importFile(input){const f=input.files&&input.files[0];if(!f)return;const reader=new FileReader();reader.onload=()=>{try{const obj=JSON.parse(reader.result);const d=obj.data||obj;if(!d||typeof d!=='object'||Array.isArray(d))throw Error('Invalid backup');if(confirm('Replace your locally saved progress with this backup?')){S=d;save();paint()}}catch(e){alert('Cannot import this JSON backup.')}};reader.readAsText(f)}
function dark(){document.body.classList.toggle('dark');set('theme',document.body.classList.contains('dark')?'dark':'light')}
let sim={seed:4,threshold:2,adopted:new Set(),edges:[],step:0};
const nodes=108,cols=12,rows=9;
function simBuild(){
sim.edges=Array.from({length:nodes},()=>new Set());
for(let i=0;i<nodes;i++){
const x=i%cols,y=Math.floor(i/cols);
for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const xx=x+dx,yy=y+dy;if(xx>=0&&xx<cols&&yy>=0&&yy<rows)sim.edges[i].add(yy*cols+xx)}
const n=(i*37+23)%nodes;if(n!==i){sim.edges[i].add(n);sim.edges[n].add(i)}
}
sim.adopted=new Set();for(let i=0;i<sim.seed;i++)sim.adopted.add((i*23+5)%nodes);sim.step=0;
}
function simDraw(){
const target=el('simnodes');if(!target)return;
if(!sim.edges.length)simBuild();
target.innerHTML=Array.from({length:nodes},(_,i)=>'<span title="Agent '+(i+1)+'" class="simnode '+(sim.adopted.has(i)?'active':'')+'"></span>').join('');
const stat=el('simstats');if(stat)stat.textContent='Step '+sim.step+' · '+sim.adopted.size+' of '+nodes+' adopted ('+Math.round(sim.adopted.size/nodes*100)+'%)';
if(el('threshold-value'))el('threshold-value').textContent=sim.threshold;if(el('seed-value'))el('seed-value').textContent=sim.seed;
}
function simStep(){
if(!sim.edges.length)simBuild();
const next=new Set(sim.adopted);
for(let i=0;i<nodes;i++){if(sim.adopted.has(i))continue;let n=0;for(const j of sim.edges[i])if(sim.adopted.has(j))n++;if(n>=sim.threshold)next.add(i)}
sim.adopted=next;sim.step++;simDraw();
}
function simReset(){simBuild();simDraw()}
function simRange(v){sim.threshold=Number(v);if(el('threshold-value'))el('threshold-value').textContent=v}
function simSeeds(v){sim.seed=Number(v);simBuild();simDraw()}
const Atlas={
go,set,mark:markCourse,course:setCourse,topic:showTopic,discover,stage:setStage,searchCourse,
bookRoute(id){bookRoute=id;paint()},researchTopic:topicSearch,setEssayTopic:essayTopic,searchPapers,
grade:rate,logTime,resetWeek,projectNote,backup,importFile,dark,
simStep,simReset,simRange,simSeeds
};
window.Atlas=Atlas;
if(S.theme==='dark')document.body.classList.add('dark');
window.addEventListener('hashchange',route);
route();
})();