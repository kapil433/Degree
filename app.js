/* Degree Atlas · offline progress store · factual source-first academic data */
(function(){
'use strict';
const U={
ignou:'https://www.ignou.ac.in/schools/programme/MAANY',
prospectus:'https://www.ignou.ac.in/viewFile/services/common_prospectus/common-prospectus-july-2026-V-L-1-1.pdf',
guide:'https://www.egyankosh.ac.in/handle/123456789/124490',
egy:'https://egyankosh.ac.in/handle/123456789/120506',
assign:'https://www.ignou.ac.in/studentService/download/assignments',
calendar:'https://www.ignou.ac.in/pages/51',
announcements:'https://www.ignou.ac.in/announcements/0?nav=1',
grade:'https://gradecard.ignou.ac.in/',
exam:'https://exam.ignou.ac.in/',
muj:'https://www.onlinemanipal.com/online-msc-mathematics-muj',
mujpdf:'https://muj.onlinemanipal.com/wp-content/uploads/sites/2/2026/03/Final-PPR-for-M.Sc-Mathematics.pdf',
mujdisclosure:'https://muj.onlinemanipal.com/self-disclosure',
mujlogin:'https://login.muj.onlinemanipal.com/',
mujnotices:'https://muj.onlinemanipal.com/notifications',
alex:'https://kapil433.github.io/Alexandria/',
alexrepo:'https://github.com/kapil433/Alexandria'
};
const MA=[
['MAN-101','Introducing Anthropology',1,4,'Core','https://www.egyankosh.ac.in/bitstream/123456789/121874/1/Block-1.pdf','Emergence of anthropology; scientific debates; fieldwork and holistic perspectives'],
['MAN-102','Physical/Biological Anthropology',1,4,'Core','https://egyankosh.ac.in/bitstream/123456789/121958/1/Unit-1.pdf','Human evolution, primates, variation and biological methods'],
['MAN-103','Social and Cultural Anthropology',1,4,'Core','https://egyankosh.ac.in/handle/123456789/121889','Culture, kinship, theory and fieldwork'],
['MAN-104','Archaeological Anthropology',1,4,'Core','https://egyankosh.ac.in/handle/123456789/121995','Dating methods, prehistory and material culture'],
['MAN-105','Tribes in India',1,4,'Core','https://egyankosh.ac.in/handle/123456789/122085','Tribal histories, institutions, livelihoods, policy and rights'],
['MAN-106','Applied Dimensions in Anthropology',2,4,'Core',null,'Applied and development anthropology; policy and professional practice'],
['MAN-107','Environmental Anthropology',2,4,'Core','https://www.egyankosh.ac.in/handle/123456789/127859','Ecological approaches, resource governance and environmental justice'],
['MAN-108','Research Methods in Anthropology-I',2,4,'Core','https://egyankosh.ac.in/handle/123456789/127853','Scientific research, data collection, qualitative methods and archaeological research'],
['MAN-109','Research Methods in Anthropology-II',2,4,'Core',null,'Advanced analysis, reporting and mixed-method research'],
['MAN-110','Epidemiology and Public Health',2,4,'Core',null,'Epidemiology, risk, communities and health systems'],
['MANE-101','Human Genetics',3,4,'Group A',null,'Population genetics and inheritance'],
['MANE-102','Human Growth and Development',3,4,'Group A',null,'Lifecourse and biosocial development'],
['MANE-103','Physiological Anthropology',3,4,'Group A',null,'Human physiology and adaptations'],
['MANE-104','Forensic Anthropology',3,4,'Group A',null,'Human skeletal analysis and identification'],
['MANE-105','Ethnography',3,4,'Group B',null,'Ethnographic traditions and interpretation'],
['MANE-106','Ethnographic Training',3,4,'Group B',null,'Fieldwork training and project'],
['MANE-107','Urban Anthropology',3,4,'Group B',null,'Cities, migration, infrastructure and urban lives'],
['MANE-108','Visual Anthropology',3,4,'Group B',null,'Visual methods, documentary, representation'],
['MPA-033','Introduction to Disaster Management',3,4,'Interdisciplinary choice',null,'Disaster management'],
['MED-008','Globalisation, Environment and Development',3,4,'Interdisciplinary choice',null,'Political economy, environment, globalisation'],
['MWG-011','Women in the Economy',3,4,'Interdisciplinary choice',null,'Gender and economic systems'],
['MANL-101','Practical in Physical/Biological Anthropology',4,8,'Required',null,'Practical work'],
['MANP-101','Dissertation',4,8,'Required',null,'Independent research']
];
const MSc=[
['DMM1101','Advanced Linear Algebra',1,4,'Core','Linear transformations; inner products; diagonalisation; spectral ideas'],
['DMM1102','Mathematical Analysis',1,4,'Core','Sequences; limits; continuity; differentiation; convergence'],
['DMM1103','Advanced Differential Equations',1,3,'Core','Analytical methods for ODE systems'],
['DMM1104','Advanced Complex Analysis',1,4,'Core','Complex functions; analytic theory; integration'],
['DMM1105','Topology-I',1,3,'Core','Metric spaces; topological spaces'],
['DMM1106','Dynamics of a Rigid Body',1,3,'Core','Classical mechanics and rigid-body systems'],
['DMM1201','Partial Differential Equation',2,4,'Core','Classification, boundary problems and solutions'],
['DMM1202','Optimization Theory and Techniques',2,4,'Core','Constrained/unconstrained optimization'],
['DMM1203','Functional Analysis',2,4,'Core','Normed spaces; operators; Banach and Hilbert spaces'],
['DMM1204','Measure Theory & Integration',2,4,'Core','Sigma-algebras; measure; Lebesgue integration'],
['DMM1205','Research Methodology & Technical Writing',2,4,'Core','Research design, writing and scientific communication'],
['DMM1206','Seminar',2,2,'Core','Research presentation and communication'],
['DMM2101','Fluid Dynamics',3,4,'Core','Continuity, flow, fluid motion and viscous dynamics'],
['DMM2102','Special Functions',3,4,'Core','Special functions and analytical applications'],
['DMM2103','Integral Equations and Calculus of Variations',3,4,'Core','Variational principles and integral equations'],
['DMM2104','Theory of Field Extensions',3,4,'Core','Field theory, algebraic extensions'],
['DMMEC1','Theory of Computation',3,3,'Computational Science elective','Automata, formal languages, computability'],
['DMMEC2','Simulation and Modelling',3,3,'Computational Science elective','Simulation designs, validation and modelling'],
['DMM2201','Project',4,10,'Required','Research project in approved pathway'],
['DMMEC3','Quantum Computing',4,3,'Computational Science elective','Qubits, quantum algorithms and information'],
['DMMEC4','Natural Language Processing (Deep Learning)',4,3,'Computational Science elective','Deep-learning based NLP methods']
];
const foundations=[
['F01','Precalculus & Functions','Algebra, inequalities, logarithms, trigonometry, functions and graphs','https://openstax.org/details/books/precalculus-2e','OpenStax Precalculus','Preparation for all Semester 1 courses','Stage 1'],
['F02','Logic, Sets & Proofs','Quantifiers, mathematical induction, contradiction and rigorous proof-writing','https://www.people.vcu.edu/~rhammack/BookOfProof/','Hammack · Book of Proof (free)','Required before real analysis, topology and abstract algebra','Stage 1'],
['F03','Single-variable Calculus','Limits, differentiation, integration, sequences and series','https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/','MIT OCW 18.01SC','Mathematical Analysis, Differential Equations','Stage 1'],
['F04','Linear Algebra','Vector spaces, bases, matrices, eigenvalues, inner products','https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/','MIT OCW 18.06SC','DMM1101 Advanced Linear Algebra','Stage 1'],
['F05','Multivariable Calculus','Partial derivatives, multiple integrals, gradients, Jacobians','https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/','MIT OCW 18.02SC','PDEs, Fluid Dynamics, Optimization','Stage 2'],
['F06','Ordinary Differential Equations','First- and second-order ODE, phase portraits and linear systems','https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/','MIT OCW 18.03SC','DMM1103 Advanced Differential Equations','Stage 2'],
['F07','Real Analysis I','Completeness, epsilon-delta proofs, sequences, series and continuity','https://www.jirka.org/ra/','J. Lebl · Basic Analysis (free)','DMM1102 Mathematical Analysis, DMM1105 Topology-I','Stage 2'],
['F08','Abstract Algebra','Groups, homomorphisms, quotient structures, rings and fields','https://open.umn.edu/opentextbooks/textbooks/abstract-algebra-theory-and-applications','Open Textbook Library · Abstract Algebra','DMM2104 Theory of Field Extensions','Stage 2'],
['F09','Probability & Statistics','Random variables, distributions, expectation, inference','https://openstax.org/details/books/introductory-statistics-2e','OpenStax Introductory Statistics','Research design, quantitative social research','Stage 2'],
['F10','Discrete Mathematics & Graphs','Combinatorics, relations, graphs, recurrence and network fundamentals','https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/','MIT OCW 6.042J','Theory of Computation and network science','Stage 3'],
['F11','Numerical Computing & Python','Algorithms, approximation error, numerical linear algebra, simulation','https://numpy.org/learn/','NumPy learning resources','Simulation and Modelling; computational projects','Stage 3'],
['F12','Analysis II & Metric Spaces','Uniform convergence, compactness, connectedness, introductory metric topology','https://www.jirka.org/ra/','J. Lebl · Basic Analysis (free)','Functional Analysis, Measure Theory, Topology-I','Stage 3']
];
const books=[
['A01','Small Places, Large Issues','Thomas Hylland Eriksen','Anthropology · nonfiction','Ethnographic thinking and anthropological foundations',null],
['A02','The Interpretation of Cultures','Clifford Geertz','Anthropology · nonfiction','Thick description and interpretation',null],
['A03','Purity and Danger','Mary Douglas','Anthropology · nonfiction','Classification, ritual and social order',null],
['A04','Seeing Like a State','James C. Scott','Anthropology · nonfiction','Legibility, planning and unintended outcomes',null],
['A05','Research Methods in Anthropology','H. Russell Bernard','Anthropology · nonfiction','Fieldwork and mixed-methods research',null],
['A06','The Nuer','E. E. Evans-Pritchard','Anthropology · nonfiction','Political organization and ethnography',null],
['A07','The Dispossessed','Ursula K. Le Guin','Anthropology · fiction','Political economy, social institutions, alternative societies',null],
['A08','The Left Hand of Darkness','Ursula K. Le Guin','Anthropology · fiction','Gender, kinship and culture',null],
['A09','Things Fall Apart','Chinua Achebe','Anthropology · fiction','Colonial encounters and community change',null],
['A10','The Hungry Tide','Amitav Ghosh','Anthropology · fiction','Ecology, displacement, conservation and livelihoods',null],
['A11','The Overstory','Richard Powers','Anthropology · fiction','Ecological interdependence and environmental ethics',null],
['M01','Calculus','Gilbert Strang','Mathematics · open textbook','Calculus foundations','https://ocw.mit.edu/courses/res-18-001-calculus-fall-2023/'],
['M02','Book of Proof','Richard Hammack','Mathematics · open textbook','Logic and rigorous proof','https://www.people.vcu.edu/~rhammack/BookOfProof/'],
['M03','Basic Analysis I & II','Jiří Lebl','Mathematics · open textbook','Rigorous analysis','https://www.jirka.org/ra/'],
['M04','Linear Algebra','Jim Hefferon','Mathematics · open textbook','Undergraduate linear algebra','https://hefferon.net/linearalgebra/'],
['M05','Introduction to Probability','Joseph K. Blitzstein, Jessica Hwang','Mathematics · nonfiction','Probabilistic modelling',null],
['C01','Network Science','Albert-László Barabási','Complexity · open textbook','Networks, growth and robustness','https://networksciencebook.com/'],
['C02','Complexity: A Guided Tour','Melanie Mitchell','Complexity · nonfiction','Emergence, computation and systems',null],
['C03','Thinking in Systems','Donella H. Meadows','Complexity · nonfiction','Feedbacks and system structure',null],
['C04','Scale','Geoffrey West','Complexity · nonfiction','Scaling laws in biology and cities',null],
['C05','Micromotives and Macrobehavior','Thomas C. Schelling','Complexity · nonfiction','Micro-macro emergence',null],
['C06','The Ministry for the Future','Kim Stanley Robinson','Complexity · fiction','Climate institutions, policy and collective action',null],
['C07','Foundation','Isaac Asimov','Complexity · fiction','Modeling societal change and limits of prediction',null],
['C08','The Three-Body Problem','Liu Cixin','Complexity · fiction','Interaction, uncertainty and civilization',null]
];
const additionalBooks=[["A12","Anthropology: What Does It Mean to Be Human?","Robert H. Lavenda, Emily A. Schultz","Anthropology · nonfiction","Broad four-field introduction"],["A13","Cultural Anthropology: A Toolkit for a Global Age","Kenneth J. Guest","Anthropology · nonfiction","Methods, globalization and contemporary life"],["A14","Argonauts of the Western Pacific","Bronisław Malinowski","Anthropology · nonfiction","Participant observation and exchange"],["A15","Coming of Age in Samoa","Margaret Mead","Anthropology · nonfiction","Culture, adolescence and methodological debate"],["A16","The Gift","Marcel Mauss","Anthropology · nonfiction","Reciprocity, obligation and social ties"],["A17","The Elementary Structures of Kinship","Claude Lévi-Strauss","Anthropology · nonfiction","Alliance and structuralism"],["A18","Outline of a Theory of Practice","Pierre Bourdieu","Anthropology · nonfiction","Habitus, practice and social reproduction"],["A19","The Anthropology of Development and Globalization","Marc Edelman, Angelique Haugerud (eds.)","Anthropology · nonfiction","Development and political economy"],["A20","Tribal Society","Virginius Xaxa","Anthropology · nonfiction","Indian tribal communities and sociology"],["A21","The Art of Not Being Governed","James C. Scott","Anthropology · nonfiction","State formation, upland societies and resistance"],["A22","Fresh Fruit, Broken Bodies","Seth M. Holmes","Anthropology · nonfiction","Migration, labour and medical anthropology"],["A23","Life in the Indian Village","S. C. Dube","Anthropology · nonfiction","Village ethnography and Indian society"],["A24","The Mushroom at the End of the World","Anna Lowenhaupt Tsing","Anthropology · nonfiction","Supply chains, ecology and precarious life"],["A25","The Dawn of Everything","David Graeber, David Wengrow","Anthropology · nonfiction","Contested grand narratives of human history"],["M06","Precalculus","Jay Abramson et al.","Mathematics · open textbook","Functions and algebraic foundations","https://openstax.org/details/books/precalculus-2e"],["M07","Calculus, Volume 1","Gilbert Strang, Edwin Herman","Mathematics · open textbook","Single-variable calculus","https://openstax.org/details/books/calculus-volume-1"],["M08","Calculus, Volume 3","Gilbert Strang, Edwin Herman","Mathematics · open textbook","Multivariable calculus","https://openstax.org/details/books/calculus-volume-3"],["M09","Discrete Mathematics: An Open Introduction","Oscar Levin","Mathematics · open textbook","Proofs, counting, graph theory","https://discrete.openmathbooks.org/"],["M10","Elementary Differential Equations and Boundary Value Problems","William E. Boyce, Richard C. DiPrima","Mathematics · nonfiction","ODE methods and modelling"],["M11","Understanding Analysis","Stephen Abbott","Mathematics · nonfiction","First rigorous analysis"],["M12","Principles of Mathematical Analysis","Walter Rudin","Mathematics · nonfiction","Advanced real analysis"],["M13","Linear Algebra Done Right","Sheldon Axler","Mathematics · nonfiction","Abstract linear algebra"],["M14","Abstract Algebra","David S. Dummit, Richard M. Foote","Mathematics · nonfiction","Group, ring and field theory"],["M15","Topology","James R. Munkres","Mathematics · nonfiction","Point-set topology"],["M16","Real and Complex Analysis","Walter Rudin","Mathematics · nonfiction","Measure and complex analysis"],["M17","Introductory Functional Analysis with Applications","Erwin Kreyszig","Mathematics · nonfiction","Banach and Hilbert spaces"],["M18","Partial Differential Equations","Lawrence C. Evans","Mathematics · nonfiction","Graduate PDE theory"],["M19","Convex Optimization","Stephen Boyd, Lieven Vandenberghe","Mathematics · open textbook","Optimization and duality","https://web.stanford.edu/~boyd/cvxbook/"],["M20","Numerical Linear Algebra","Lloyd N. Trefethen, David Bau III","Mathematics · nonfiction","Algorithms and numerical stability"],["M21","Probability and Random Processes","Geoffrey Grimmett, David Stirzaker","Mathematics · nonfiction","Advanced probability"],["M22","Introduction to Algorithms","Thomas H. Cormen et al.","Mathematics · nonfiction","Algorithms and computational foundations"],["M23","Theoretical Neuroscience","Peter Dayan, L. F. Abbott","Mathematics · nonfiction","Dynamical and probabilistic models"],["M24","An Introduction to Statistical Learning","Gareth James et al.","Mathematics · open textbook","Applied statistical learning","https://www.statlearning.com/"],["M25","Deep Learning","Ian Goodfellow, Yoshua Bengio, Aaron Courville","Mathematics · open textbook","Mathematics of neural networks","https://www.deeplearningbook.org/"],["C09","Introduction to the Modeling and Analysis of Complex Systems","Hiroki Sayama","Complexity · open textbook","Mathematical and computational systems modelling","https://milneopentextbooks.org/introduction-to-the-modeling-and-analysis-of-complex-systems/"],["C10","Nonlinear Dynamics and Chaos","Steven H. Strogatz","Complexity · nonfiction","Bifurcations and dynamical systems"],["C11","Six Degrees","Duncan J. Watts","Complexity · nonfiction","Small-world networks"],["C12","Linked","Albert-László Barabási","Complexity · nonfiction","Scale-free networks"],["C13","Sync","Steven H. Strogatz","Complexity · nonfiction","Synchronization and coupled oscillators"],["C14","The Quark and the Jaguar","Murray Gell-Mann","Complexity · nonfiction","Complex adaptive systems"],["C15","Complex Adaptive Systems","John H. Miller, Scott E. Page","Complexity · nonfiction","Emergence, computation and adaptive agents"],["C16","Growing Artificial Societies","Joshua M. Epstein, Robert Axtell","Complexity · nonfiction","Agent-based social science"],["C17","Generative Social Science","Joshua M. Epstein","Complexity · nonfiction","Agent-based explanation"],["C18","Dynamics of Complex Networks","Dorogovtsev, Mendes","Complexity · nonfiction","Network structure and dynamics"],["C19","Evolutionary Dynamics","Martin A. Nowak","Complexity · nonfiction","Evolutionary games and selection"],["C20","The Nature of Technology","W. Brian Arthur","Complexity · nonfiction","Technological evolution and recombination"],["C21","Increasing Returns and Path Dependence in the Economy","W. Brian Arthur","Complexity · nonfiction","Lock-in and economic complexity"],["C22","Complexity and the Economy","W. Brian Arthur","Complexity · nonfiction","Complexity economics"],["C23","Complexity: The Emerging Science at the Edge of Order and Chaos","M. Mitchell Waldrop","Complexity · nonfiction","History of interdisciplinary complexity"],["C24","At Home in the Universe","Stuart Kauffman","Complexity · nonfiction","Self-organization and evolution"],["C25","The Systems View of Life","Fritjof Capra, Pier Luigi Luisi","Complexity · nonfiction","Systems thinking across disciplines"]];
additionalBooks.forEach((b)=>books.push([...b,b[5]||null]));
const research=[
{key:'r1',title:'Social contagion of vehicle adoption',q:'How do trust and peer networks influence EV, CNG and hybrid adoption in Indian cities?',anth:'Semi-structured interviews; household decision ethnography; informed consent',math:'Network inference, hazard models, regressions and uncertainty intervals',complex:'Threshold diffusion and heterogeneous agent networks',data:'Aggregated registration series + consented survey and network ties',output:'Reproducible research note and pilot diffusion model'},
{key:'r2',title:'Energy transitions as social-technical systems',q:'Why do infrastructure roll-outs produce unequal adoption despite similar prices and incentives?',anth:'Political ecology, stakeholder mapping and situated interviews',math:'Optimization, spatial statistics and mixed-effects models',complex:'Path dependence, feedbacks, co-evolution of infrastructure and demand',data:'Public infrastructure locations, policy histories, local fieldwork',output:'Comparative study with a documented causal diagram'},
{key:'r3',title:'Resilience of mobility networks',q:'Which structures make urban mobility systems robust or fragile under disruption?',anth:'Document lived disruption, transport inequality and institutional response',math:'Graph theory, centrality, percolation, Monte Carlo simulation',complex:'Cascades and multilayer infrastructure networks',data:'Public roads/transport networks, disruptions and documented simulations',output:'Open reproducible notebook and network resilience paper draft'},
{key:'r4',title:'Computational ethnography of urban transport',q:'Can ethnographic themes be combined with simulation without erasing lived context?',anth:'Fieldnotes, participant observation, reflexive coding',math:'Uncertainty quantification, statistical text analysis and validation',complex:'Agent-based models parameterized by qualitative and quantitative evidence',data:'Consented anonymized coded observations and open contextual data',output:'Ethics-first mixed methods protocol and prototype'}
];
const adminTasks=[
['adm1','IGNOU admission confirmation & enrolment number','Anthropology'],
['adm2','Verify MAANY programme and assigned study centre','Anthropology'],
['adm3','Download applicable July 2026 assignments from official portal','Anthropology'],
['adm4','Confirm assignment deadline and submission mode with study centre','Anthropology'],
['adm5','Register/submit examination form and obtain hall ticket','Anthropology'],
['adm6','Check IGNOU marks and grade card after evaluation','Anthropology'],
['adm7','Review MUJ syllabus against actual LMS/course enrollment','Mathematics'],
['adm8','Verify MUJ internal assessment and proctored TEE schedule in LMS','Mathematics'],
['adm9','Review MUJ writing tablet requirement for assessments','Mathematics'],
['adm10','Confirm MUJ elective selection and project-track approval','Mathematics']
];
const nav=[['home','Home','⌂'],['anth','Anthropology','◈'],['math','Mathematics','∑'],['complex','Complexity','◎'],['learning','Learning Lab','✦'],['studio','AI & Projects','⚗'],['library','Alexandria','▤']];
let S={};
try{S=JSON.parse(localStorage.getItem('degree-atlas-v2')||'{}');if(!S||typeof S!=='object'||Array.isArray(S))S={}}catch(e){S={}}
if(!S.migrated){
try{const legacy=JSON.parse(localStorage.getItem('degree-ignou-v1')||'{}');if(legacy&&typeof legacy==='object'){MA.forEach(c=>{if(legacy['course-'+c[0]]&&!S['done-'+c[0]])S['done-'+c[0]]=true;if(legacy['status-'+c[0]])S['a-status-'+c[0]]=legacy['status-'+c[0]];if(legacy['due-'+c[0]])S['a-due-'+c[0]]=legacy['due-'+c[0]];if(legacy['proof-'+c[0]])S['a-proof-'+c[0]]=legacy['proof-'+c[0]]});if(legacy.researchNotes)S.researchNotes=legacy.researchNotes;if(legacy.admission)S.admission=legacy.admission;if(legacy.centre)S.centre=legacy.centre;if(legacy.programme)S.programme=legacy.programme;if(legacy.hours)S.legacyHours=Number(legacy.hours)||0}}catch(e){}
S.migrated=true;store()}
function store(){try{localStorage.setItem('degree-atlas-v2',JSON.stringify(S))}catch(e){console.warn('Could not save locally',e)}}
function html(s){return String(s===undefined||s===null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function att(s){return html(s)}
function safeURL(s){try{const u=new URL(String(s));return /^https?:$/.test(u.protocol)?u.href:''}catch(e){return''}}
function L(url,label,cls){return '<a class="'+(cls||'')+'" href="'+att(safeURL(url))+'" target="_blank" rel="noopener noreferrer">'+html(label)+' ↗</a>'}
function chip(url,title){return L(url,title,'resource-chip')}
function donePct(prefix,items){if(!items.length)return 0;return Math.round(items.filter(x=>S[prefix+x[0]]).length/items.length*100)}
function countDone(prefix,items){return items.filter(x=>!!S[prefix+x[0]]).length}
function progress(p){return '<div class="progress"><b style="width:'+Math.min(100,Math.max(0,p))+'%"></b></div>'}
function sec(text,meta){return '<div class="section-title">'+html(text)+(meta?'<small>'+html(meta)+'</small>':'')+'</div>'}
function notice(title,body,cls){return '<div class="notice '+(cls||'')+'"><strong>'+html(title)+'</strong> '+body+'</div>'}
function card(inner,cls){return '<article class="card '+(cls||'')+'">'+inner+'</article>'}
function pill(t,style){return '<span class="pill '+(style||'')+'">'+html(t)+'</span>'}
function cls(n){return n==='Done'||n==='Submitted'||n==='Evaluated'?'green':n==='Planned'||n==='Drafting'?'purple':' '}
function shell(inner){document.getElementById('view').innerHTML=inner+foot()}
function foot(){return '<footer class="footer"><span>Degree Atlas · Independent learning companion · Stored in this browser</span><span>Sources checked 11 November 2026 · Not an official university portal</span></footer>'}
function setTitle(title){document.getElementById('current-section').textContent=title;document.title=title+' · Degree Atlas'}
function dateStatus(dt){if(!dt)return 'Date not entered';const date=new Date(dt+'T23:59:59');if(Number.isNaN(date.getTime()))return 'Invalid date';const days=Math.floor((date-new Date())/86400000);return days<0?'Overdue by '+Math.abs(days)+'d':days===0?'Due today':'In '+(days+1)+'d'}
function thisWeekMinutes(){const now=new Date(),ago=new Date(now.getTime()-7*86400000);return (S.sessions||[]).reduce((n,x)=>{const d=new Date(x.date+'T12:00:00');return d>=ago&&d<=now?n+Number(x.minutes||0):n},0)}
function metrics(title,num,desc,percent){return card('<div class="metric-label">'+html(title)+'</div><div class="metric-number mono">'+html(num)+'</div>'+ (percent!==undefined?progress(percent):'')+'<div class="metric-foot">'+html(desc)+'</div>')}
function filters(sub,id,options){return '<div class="seg" role="group" aria-label="'+html(sub)+'">'+options.map(x=>'<button class="'+(id===x[0]?'active':'')+'" onclick="Degree.sub(\''+x[0]+'\')">'+html(x[1])+'</button>').join('')+'</div>'}
function drawNav(){document.getElementById('side-nav').innerHTML=nav.map(n=>'<button class="'+(page===n[0]?'active':'')+'" onclick="Degree.go(\''+n[0]+'\')"><span class="glyph">'+n[2]+'</span>'+n[1]+'</button>').join('');document.getElementById('mobile-nav').innerHTML=nav.map(n=>'<button class="'+(page===n[0]?'active':'')+'" onclick="Degree.go(\''+n[0]+'\')"><span class="glyph">'+n[2]+'</span>'+n[1]+'</button>').join('');document.getElementById('nightbtn').textContent=document.body.classList.contains('night')?'☀':'☾'}
let page='home',sub='overview',mathSub='foundations',complexSub='research',search='';
const intros={
home:['YOUR LEARNING SPACE','The Degree Atlas','Study with intention. Explore ideas. Make something original.','Today · Across disciplines'],
learning:['LEARN HOW TO LEARN','Learning Lab','Evidence-based practice, retrieval, memory and reflection.','Memory · Mastery · Practice'],
studio:['RESEARCH AND BUILD','AI & Projects','Think independently, use AI critically and turn questions into working experiments.','AI · Experiments · Research'],
anth:['THE HUMAN SCIENCES','Anthropology','Culture, evolution, environment and the everyday lives of people.','IGNOU · MAANY · July 2026 application'],
math:['FROM FIRST PRINCIPLES','Mathematics','Rebuild undergraduate foundations; then climb to MUJ MSc mathematics with confidence.','MUJ · MSc Mathematics · 81 credits'],
complex:['THE INTERDISCIPLINARY LAB','Complexity Science','A research programme connecting ethnography, equations, networks and social-technical change.','Research · Networks · Simulation'],
library:['YOUR PERSONAL KNOWLEDGE ATLAS','Alexandria','A doorway into your larger library of fiction, nonfiction, ideas and intellectual connections.','Literature · Notes · Synthesis']
};
function hero(key,cta,label,secondary,secondaryLabel){const d=intros[key];return '<div class="hero"><div class="eyebrow">'+html(d[0])+'</div><h1>'+html(d[1])+'</h1><p>'+html(d[2])+'</p>'+(cta?L(cta,label,'lightbutton'):'')+(secondary?L(secondary,secondaryLabel,'ghostbutton'):'')+'<div style="margin-top:20px;font-size:.73rem;color:#b8c4e2">'+html(d[3])+'</div></div>'}
function goto(h){if(location.hash!=='#'+h)location.hash=h;else route()}
function route(){let h=(location.hash||'#anth').replace('#','');if(!nav.some(x=>x[0]===h))h='home';page=h;sub=h==='math'?'foundations':h==='complex'?'research':'overview';search='';render();window.scrollTo({top:0,behavior:'instant'})}
function render(){drawNav();setTitle(nav.find(x=>x[0]===page)[1]);if(page==='home')renderHome();else if(page==='anth')renderAnth();else if(page==='math')renderMath();else if(page==='complex')renderComplex();else if(page==='learning')renderLearning();else if(page==='studio')renderStudio();else renderLibrary()}
function buttonSub(id,label){return '<button onclick="Degree.sub(\''+id+'\')" class="'+(sub===id?'active':'')+'">'+html(label)+'</button>'}
function viewTabs(options){return '<div class="toolbar"><div class="seg">'+options.map(x=>buttonSub(x[0],x[1])).join('')+'</div></div>'}
function authResource(){return '<div>'+chip(U.prospectus,'July 2026 prospectus')+chip(U.guide,'MAANY programme guide')+chip(U.egy,'eGyanKosh MAANY')+chip(U.assign,'Official assignments')+chip(U.calendar,'IGNOU calendar')+'</div>'}
function renderAnth(){
let head=hero('anth',U.ignou,'Official programme',U.egy,'Study materials')+viewTabs([['overview','Overview'],['courses','Courses'],['assignments','Assignments'],['reading','Books'],['papers','Papers'],['admin','Admin']]);
if(sub==='overview'){
const anthCore=MA.slice(0,10),p=donePct('done-',anthCore),submitted=anthCore.filter(x=>['Submitted','Evaluated'].includes(S['a-status-'+x[0]])).length;
head+=notice('July 2026 cohort · status must be checked','The official MAANY curriculum has 80 credits across four semesters. Application ≠ admission confirmation. First-year assignment PDFs must match your applicable session.','amber');
head+='<div class="grid four">'+metrics('Core courses marked complete',countDone('done-',anthCore)+' / 10','Personal course checklist',p)+metrics('Assignments submitted',submitted+' / 10','Requires actual acknowledgement',Math.round(submitted/10*100))+metrics('Semester structure','4','20 credits each')+metrics('Programme total','80','Credits prescribed by IGNOU')+'</div>';
head+=sec('Start here','Verified university sources')+card(authResource()+'<p class="small muted">For source documents, follow only university-hosted links. Individual eGyanKosh course collections are linked in the course library when verified.</p>');
head+=sec('Your next actions','Track each step honestly')+card(adminTasks.slice(0,6).map(t=>checkTask(t)).join(''));
head+=sec('Academic timeline','Official general calendar, not personalised deadlines')+'<div class="grid two">'+card('<h3>July cohort · semester system</h3><p>IGNOU’s general calendar lists assignment submission activity during August–September and December term-end examinations. Session notices and centre instructions can change this schedule.</p>'+L(U.calendar,'View official calendar','linktext'))+card('<h3>Assignment workflow</h3><p>Download matching PDF → draft → review → confirm submission mode → submit → retain proof → check grade card.</p>'+L(U.assign,'Find applicable assignment PDFs','linktext'))+'</div>';
}else if(sub==='courses'){
head+=notice('Curriculum versus content','Official course codes, titles, groups and credits follow the July 2026 prospectus. Individual topic blurbs are study orientation only. Verified eGyanKosh links are marked “Study material”; other courses link to the programme repository.');
head+='<div class="toolbar"><input class="control search" id="anthSearch" placeholder="Search courses or codes…" value="'+att(search)+'" oninput="Degree.filter(this.value)"><select class="control" onchange="Degree.filterSem(this.value)"><option value="0">All semesters</option>'+[1,2,3,4].map(n=>'<option value="'+n+'" '+((S.anthSem||0)==n?'selected':'')+'>Semester '+n+'</option>').join('')+'</select></div>';
const sem=Number(S.anthSem||0),matches=MA.filter(c=>(!sem||c[2]===sem)&&(c[0]+' '+c[1]+' '+c[6]).toLowerCase().includes(search.toLowerCase()));
head+='<div class="grid two">'+matches.map(c=>renderAnthCourse(c)).join('')+'</div>';
if(!matches.length)head+='<div class="empty">No matching courses. Clear the filter to see all courses.</div>';
head+=notice('Third- and fourth-semester course selection','Semester 3 requires two Group A + two Group B courses + one interdisciplinary course. Semester 4 includes an 8-credit practical, 8-credit dissertation, plus one approved 4-credit interdisciplinary elective.');
}else if(sub==='assignments'){
head+=notice('Deadline verification','No automatically generated deadline is authoritative. In the official portal search each course code and check “Valid for Session”, the PDF instructions and your study centre’s current method. Earlier January 2026-only PDFs should not be treated as valid for July 2026.','amber');
head+=card('<h3>Official submission resources</h3>'+chip(U.assign,'Current assignment search')+chip(U.announcements,'Announcements and extensions')+chip(U.grade,'Grade card')+'<p class="small muted">After submitting, record the real acknowledgement, not simply “draft complete”.</p>');
head+=sec('Assignment workbench','10 first-year courses; deadlines are your verified entries');
head+='<div class="stack">'+MA.filter(c=>c[2]<=2).map(c=>assignmentCard(c)).join('')+'</div>';
}else if(sub==='reading'){
head+=notice('Legitimate book links','Free texts open their official host. Copyrighted books link to catalogue search, not unauthorized downloads.');
head+=bookShelf('Anthropology · nonfiction')+bookShelf('Anthropology · fiction')+learningResources('Anthropology');
}else if(sub==='papers'){
head+=papersUI('Anthropology');
}else if(sub==='admin'){
head+=notice('Administrative information','Admission status is editable; this dashboard cannot read your private IGNOU student record or track live university notifications.');
head+='<div class="grid two">'+card('<h3>IGNOU student profile</h3><div class="formgrid"><label class="field">Admission status<select data-key="admission" onchange="Degree.saveInput(this)">'+['Applied; awaiting confirmation','Confirmed','Enrolment received'].map(v=>'<option '+(S.admission===v?'selected':'')+'>'+v+'</option>').join('')+'</select></label><label class="field">Enrolment / programme code<input data-key="programme" placeholder="e.g. MAANY" value="'+att(S.programme||'')+'" onchange="Degree.saveInput(this)"></label><label class="field">Regional / learner support centre<input data-key="centre" value="'+att(S.centre||'')+'" placeholder="Enter confirmed centre" onchange="Degree.saveInput(this)"></label><label class="field">Personal next check date<input type="date" data-key="admissionCheck" value="'+att(S.admissionCheck||'')+'" onchange="Degree.saveInput(this)"></label></div></div>')+card('<h3>Administrative checklist</h3>'+adminTasks.slice(0,6).map(t=>checkTask(t)).join(''))+'</div>';
head+=sec('Official academic support')+card(chip(U.ignou,'Programme information')+chip(U.assign,'Assignment portal')+chip(U.calendar,'Calendar')+chip(U.exam,'Exam portal')+chip(U.grade,'Grade card')+chip('https://www.ignou.ac.in/schools','School and faculty directory')+'<p class="small muted">Faculty supervision and contact availability should be verified on the current IGNOU department pages.</p>');
}shell(head);
}
function checkTask(t){return '<label class="checkline" style="padding:8px 0;font-size:.85rem"><input type="checkbox" '+(S['task-'+t[0]]?'checked':'')+' onchange="Degree.set(\'task-'+t[0]+'\',this.checked)"><span>'+html(t[1])+'</span></label>'}

function courseResource(code){
const all=window.DEGREE_COURSE_RESOURCES||{},d=all.anth?.[code]||all.math?.[code]||all.found?.[code];
if(!d)return '';
return '<div class="course-detail"><div class="small muted">PRIMARY REFERENCE</div><b>'+html(d[0])+'</b><div class="small muted">'+html(d[1])+'</div><p>'+html(d[4])+'</p><div class="source-links">'+L('https://openlibrary.org/search?q='+encodeURIComponent(d[0]+' '+d[1]),'Find textbook')+L(d[2],'Open course / learning resource')+'</div></div>';
}

function renderAnthCourse(c){
const id=c[0];return card('<div class="course"><div><div class="course-top">'+pill('Semester '+c[2],'purple')+pill(c[4])+pill(c[3]+' credits')+'</div><div class="course-name">'+html(id+' · '+c[1])+'</div><p class="course-desc">'+html(c[6])+'</p></div><label title="Personal completion only"><input aria-label="Mark course completed" class="course-check" type="checkbox" '+(S['done-'+id]?'checked':'')+' onchange="Degree.set(&quot;done-'+id+'&quot;,this.checked)"></label></div>');
}
function assignmentCard(c){
const id=c[0],status=S['a-status-'+id]||'Not started',date=S['a-due-'+id]||'',url=S['a-url-'+id]||'',proof=S['a-proof-'+id]||'';
return card('<div class="row-between"><div><div class="course-top">'+pill(id,'purple')+pill('Sem '+c[2])+'</div><h3>'+html(c[1])+'</h3></div>'+pill(status,cls(status))+'</div><div class="formgrid" style="margin-top:13px"><label class="field">Work / submission stage<select data-key="a-status-'+id+'" onchange="Degree.saveInput(this)">'+['Not started','Reading','Drafting','Reviewing','Ready','Submitted','Evaluated'].map(s=>'<option '+(status===s?'selected':'')+'>'+s+'</option>').join('')+'</select></label><label class="field">Verified due date (enter manually)<input type="date" value="'+att(date)+'" data-key="a-due-'+id+'" onchange="Degree.saveInput(this)"></label><label class="field">Applicable official assignment PDF URL<input value="'+att(url)+'" placeholder="Paste verified PDF URL" data-key="a-url-'+id+'" onchange="Degree.saveInput(this)"></label><label class="field">Submission acknowledgement / mark<input value="'+att(proof)+'" data-key="a-proof-'+id+'" placeholder="Receipt / marks / notes" onchange="Degree.saveInput(this)"></label></div><div class="source-links">'+L(U.assign,'Find '+id+' assignment')+(safeURL(url)?L(url,'Your verified PDF'):'')+L(U.grade,'Check grade card')+'</div>'+(date?'<p class="small muted">'+html(dateStatus(date))+' · user-entered date</p>':''));
}
function bookLevel(b,i){
const n=Number(b[0].slice(1));
return n<=8?'Beginner':n<=17?'Intermediate':'Advanced';
}
function bookShelf(category){
const arr=books.filter(b=>b[3]===category).sort((a,b)=>Number(a[0].slice(1))-Number(b[0].slice(1)));
return sec(category,arr.length+' selected titles')+card('<div class="toolbar"><span class="pill purple">Basic → Intermediate → Advanced</span></div><div class="book-list">'+arr.map((b,i)=>bookRow(b)).join('')+'</div>');
}
function bookRow(b){
const n=Number(b[0].slice(1)),level=bookLevel(b),catalogue='https://openlibrary.org/search?q='+encodeURIComponent(b[1]+' '+b[2]),url=b[5]||catalogue,status=S['book-'+b[0]]||'To read';
return '<div class="bookrow"><div><div class="course-top">'+pill(String(n).padStart(2,'0'))+pill(level,level==='Beginner'?'green':level==='Intermediate'?'purple':'amber')+'</div><h4>'+html(b[1])+'</h4><p>'+html(b[2]+' · '+b[4])+'</p></div><div><select class="control small" aria-label="Reading status '+att(b[1])+'" onchange="Degree.set(&quot;book-'+b[0]+'&quot;,this.value)">'+['To read','Reading','Finished'].map(t=>'<option '+(status===t?'selected':'')+'>'+t+'</option>').join('')+'</select><div style="margin-top:6px">'+L(url,b[5]?'Open resource':'Find book','linktext')+'</div></div></div>';
}
function learningResources(domain){
const data={
Anthropology:[
['MIT OpenCourseWare Anthropology','https://ocw.mit.edu/search/?d=Anthropology'],
['Yale Open Courses: Anthropology','https://oyc.yale.edu/'],
['IGNOU eGyanKosh','https://egyankosh.ac.in/'],
['SAPIENS Anthropology Magazine','https://www.sapiens.org/'],
['Society for Cultural Anthropology','https://culanth.org/']],
Mathematics:[
['MIT OpenCourseWare Mathematics','https://ocw.mit.edu/search/?d=Mathematics'],
['3Blue1Brown · Visual mathematics','https://www.youtube.com/@3blue1brown'],
['Professor Leonard · Calculus lectures','https://www.youtube.com/@ProfessorLeonard'],
['The Bright Side of Mathematics','https://www.youtube.com/@brightsideofmaths'],
['NPTEL Mathematics','https://nptel.ac.in/courses?disciplineId=111']],
Complexity:[
['Santa Fe Institute Complexity Explorer','https://www.complexityexplorer.org/'],
['Complexity Explorer video lectures','https://www.youtube.com/@ComplexityExplorer'],
['Network Science textbook','https://networksciencebook.com/'],
['NetLogo Models Library','https://ccl.northwestern.edu/netlogo/models/'],
['Santa Fe Institute research','https://www.santafe.edu/research']]
};
return sec('Lectures, videos and free learning resources')+card((data[domain]||[]).map(x=>chip(x[1],x[0])).join('')+'<p class="footnote">Video channels and course libraries are discovery links, not endorsements of every individual video. Use university material as the syllabus authority.</p>');
}
function papersUI(domain){
const all=(window.DEGREE_VERIFIED_READINGS||[]).filter(x=>x.domain===domain).sort((a,b)=>a.year-b.year);
const paper=all.filter(x=>x.type==='paper'),articles=all.filter(x=>x.type==='article');
function rows(arr){return arr.map(p=>'<div class="bookrow"><div><div class="course-top">'+pill(p.year,'purple')+pill(p.topic)+'</div><h4>'+html(p.title)+'</h4><p>'+html(p.authors)+'</p></div><div><select class="control small" onchange="Degree.set(&quot;reading-'+p.id+'&quot;,this.value)">'+['To read','Reading','Finished'].map(v=>'<option '+(S['reading-'+p.id]===v?'selected':'')+'>'+v+'</option>').join('')+'</select><div style="margin-top:5px">'+L(p.url,'Open source','linktext')+'</div></div></div>').join('')}
return notice('Curated research library','Papers and essays/articles are classified separately and connected to courses or topics. The target is 100 verified entries in each category per discipline; only checked seed entries are published, rather than filling the count with unverified citations.')+sec('Research papers',paper.length+' source-linked entries')+card(paper.length?rows(paper):'<div class="empty">Research papers being curated.</div>')+sec('Essays, articles and open explainers',articles.length+' source-linked entries')+card(articles.length?rows(articles):'<div class="empty">Articles being curated.</div>');
}
function renderMath(){
let head=hero('math',U.mujpdf,'Official detailed syllabus',U.muj,'MUJ programme')+viewTabs([['foundations','Foundations'],['msc','MUJ MSc'],['planner','Planner'],['reading','Books'],['papers','Papers']]);
if(sub==='foundations'){
let n=countDone('found-',foundations),p=donePct('found-',foundations);
head+=notice('Essential distinction','This undergraduate bridge is an independently designed preparatory track, NOT MUJ coursework and not counted toward its 81 credits.');
head+='<div class="grid two">'+metrics('Bridge modules complete',n+' / 12','Personal preparation milestones',p)+metrics('Study pathway','3 stages','Arithmetic/analysis → algebra → computation')+'</div>';
head+=sec('Preparation pathway','Follow the sequence, or test out of what you already know');
head+='<div class="grid two">'+foundations.map(f=>card('<div class="row-between">'+pill(f[6],'purple')+'<input aria-label="Mark '+att(f[1])+' complete" class="course-check" type="checkbox" '+(S['found-'+f[0]]?'checked':'')+' onchange="Degree.set(\'found-'+f[0]+'\',this.checked)"></div><h3>'+html(f[1])+'</h3><p>'+html(f[2])+'</p><div class="small muted"><strong>Feeds into:</strong> '+html(f[5])+'</div><div class="source-links">'+L(f[3],f[4])+'</div>')).join('')+'</div>';
head+=sec('How to study each module')+card('<div class="timeline">'+[['1','Understand','Work through a full lecture or chapter and define key objects'],['2','Prove','Complete at least five exercises without checking solutions first'],['3','Apply','Write Python or visual examples where useful'],['4','Assess','Produce one-page notes; revisit after 1, 7 and 30 days']].map(x=>'<div class="timeline-item"><span class="stepbadge">'+x[0]+'</span><div><h4>'+x[1]+'</h4><p>'+x[2]+'</p></div></div>').join('')+'</div>');
}else if(sub==='msc'){
head+=notice('MUJ curricular evidence','Course codes, titles and credits below follow the MUJ official March 2026 programme document. Computational Science is shown as a suggested elective pathway; confirm your actual elective registration with MUJ. The six core Semester 1 courses total 21 credits.');
head+='<div class="grid four">'+[[1,21],[2,22],[3,22],[4,16]].map(x=>metrics('Semester '+x[0],x[1]+' cr','Official credit allocation')).join('')+'</div>';
head+=sec('Official curriculum','Credit-bearing university courses');
for(let sem=1;sem<=4;sem++){let items=MSc.filter(c=>c[2]===sem);head+='<div class="row-between">'+sec('Semester '+sem,items.length+' subjects including planned Computational Science electives')+'</div><div class="grid two">'+items.map(c=>renderMScCourse(c)).join('')+'</div>'}
head+=sec('Other official elective baskets')+card('<div class="grid two"><div><h3>Semester 3</h3><p>Mathematics: Fuzzy Sets & Their Applications; Mechanics of Solids.</p><p>Data Science: Fundamentals of Data Science; Machine Learning.</p><p>Econometrics: Mathematics for Economists; Econometrics Applications.</p></div><div><h3>Semester 4</h3><p>Mathematics: Mathematical Statistics; Linear Models.</p><p>Data Science: Data Visualization; Business Analytics.</p><p>Econometrics: Econometric Methods; Bayesian Econometrics.</p></div></div>'+L(U.mujpdf,'Full MUJ syllabus PDF','linktext'));
}else if(sub==='planner'){
head+=notice('MUJ dates: student-specific','The official programme describes online-proctored term-end examinations and LMS-based assessments. Specific assessment deadlines, slots and examination dates are to be confirmed in your MUJ LMS/admit card. They are not invented here.','amber');
head+='<div class="grid two">'+card('<h3>Verified MUJ assessment facts</h3><div class="timeline">'+[['01','Continuous assessment','Two assignments of 30 marks each are averaged into the internal component (30%)'],['02','Term-end examinations','Online-proctored, 3 hours, 70 marks; at least 40% separately in IA and TEE'],['03','Graphic pen tablet','University lists Wacom CTL-472 or XP-Pen Star G640 as compatible models'],['04','Project','University lists guide-based and Coursera-based project paths, subject to approval']].map(x=>'<div class="timeline-item"><span class="stepbadge">'+x[0]+'</span><div><h4>'+x[1]+'</h4><p>'+x[2]+'</p></div></div>').join('')+'</div>'+L(U.muj,'Official FAQs','linktext'))+card('<h3>MUJ administrative checklist</h3>'+adminTasks.slice(6).map(t=>checkTask(t)).join('')+'<div class="divider"></div>'+chip(U.mujpdf,'Syllabus PDF')+chip(U.mujdisclosure,'University disclosure')+chip(U.mujlogin,'MUJ official login')+chip(U.mujnotices,'MUJ notices')+'</div>')+'</div>';
head+=sec('Personal deadlines','Dates you enter from LMS / official notices');
head+=taskManager('Mathematics');
}else if(sub==='papers'){
head+=papersUI('Mathematics');
}else if(sub==='reading'){
head+=notice('Math reading guide','Begin with undergraduate resources. The official MUJ PPR document also specifies course-wise textbook references in the detailed syllabus.');
head+=bookShelf('Mathematics · open textbook')+bookShelf('Mathematics · nonfiction')+learningResources('Mathematics');
head+=sec('Free structured courses')+card(chip('https://ocw.mit.edu/collections/ocw-scholar/','MIT OCW Scholar')+chip('https://openstax.org/subjects/math','OpenStax mathematics')+chip('https://math.libretexts.org/','LibreTexts Mathematics')+chip('https://www.jirka.org/ra/','Basic Analysis')+chip(U.mujpdf,'MUJ official textbook references'));
}shell(head);
}
function renderMScCourse(c){
const planned=c[4]==='Computational Science elective';
return card('<div class="course"><div><div class="course-top">'+pill(c[0],'purple')+pill(c[3]+' credits')+(planned?pill('Computational Science','green'):pill(c[4]))+'</div><div class="course-name">'+html(c[1])+'</div><p class="course-desc">'+html(c[5])+'</p></div><label><input type="checkbox" class="course-check" aria-label="Mark '+att(c[1])+' complete" '+(S['msc-'+c[0]]?'checked':'')+' onchange="Degree.set(&quot;msc-'+c[0]+'&quot;,this.checked)"></label></div>');
}
function taskManager(domain){const tasks=(S.customTasks||[]).filter(t=>t.domain===domain);return card('<h3>Add an academic milestone</h3><div class="formgrid"><label class="field">Task<input id="newTask" placeholder="e.g. DMM1101 assignment 1"></label><label class="field">Date (personal / verified)<input type="date" id="newDate"></label><label class="field">Source classification<select id="newKind"><option value="Personal target">Personal target</option><option value="Officially verified by me">Officially verified by me</option></select></label><label class="field">Source URL (optional)<input id="newSource" placeholder="https://official university source"></label></div><div class="actions-row"><button class="btn primary" onclick="Degree.addTask(\''+domain+'\')">＋ Add milestone</button></div><div class="divider"></div>'+(tasks.length?tasks.sort((a,b)=>String(a.date||'').localeCompare(String(b.date||''))).map(t=>'<div class="task"><div><div class="task-title">'+html(t.title)+'</div><div class="meta">'+html(t.date||'No date')+' · '+html(dateStatus(t.date))+' · '+html(t.kind||'Personal target')+'</div>'+ (safeURL(t.source)?L(t.source,'Source','linktext'):'')+'</div><div class="controls"><label class="checkline small"><input type="checkbox" '+(t.done?'checked':'')+' onchange="Degree.taskToggle(\''+t.id+'\',this.checked)"> Done</label><button class="btn" onclick="Degree.taskDelete(\''+t.id+'\')">Remove</button></div></div>').join(''):'<div class="empty">No milestones added yet. Enter verified LMS dates and personal targets above.</div>')+'</div>')}
function renderComplex(){
let head=hero('complex','https://www.complexityexplorer.org/','Explore free courses','https://networksciencebook.com/','Network Science textbook')+viewTabs([['research','Projects'],['path','Methods'],['reading','Books'],['papers','Papers'],['routine','Routine']]);
if(sub==='research'){
head+=notice('Research-first design','Projects below are original proposals, not advertised university research positions. Empirical claims require evidence; ethics and consent are prerequisites for primary fieldwork.');
head+=sec('The cross-disciplinary research lab','Anthropology × mathematics × complexity');
head+='<div class="node-map"><svg viewBox="0 0 760 270" role="img" aria-label="Three connected academic disciplines converge on original research"><defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="#7a76ef"/><stop offset="1" stop-color="#43b9c0"/></linearGradient></defs><g stroke="#839bc0" stroke-width="2" opacity=".6"><path d="M144 73 L385 147 L614 74 M144 73 L145 218 L385 147 L615 218 L614 74 M145 218 L614 74" fill="none"/></g><g><circle cx="145" cy="72" r="49" fill="#415d8b"/><circle cx="615" cy="72" r="49" fill="#4a5d8a"/><circle cx="145" cy="215" r="49" fill="#3b737d"/><circle cx="615" cy="215" r="49" fill="#385e80"/><circle cx="383" cy="147" r="63" fill="url(#g)"/></g><g text-anchor="middle"><text x="145" y="67" font-size="13">Anthro-</text><text x="145" y="84" font-size="13">pology</text><text x="615" y="77" font-size="14">Maths</text><text x="145" y="220" font-size="14">Networks</text><text x="615" y="220" font-size="14">Simulation</text><text x="383" y="141" font-size="15" fill="#fff">Original</text><text x="383" y="161" font-size="15" fill="#fff">Research</text></g></svg></div>';
head+=sec('Research questions worth pursuing','Choose a topic, then build evidence')+'<div class="grid two">'+research.map(r=>card('<div class="row-between">'+pill('Research proposal','purple')+'<input type="checkbox" aria-label="Mark '+att(r.title)+' research milestone" class="course-check" '+(S['project-'+r.key]?'checked':'')+' onchange="Degree.set(\'project-'+r.key+'\',this.checked)"></div><h3>'+html(r.title)+'</h3><p><strong>Question:</strong> '+html(r.q)+'</p><div class="course-detail"><p><b>Anthropology:</b> '+html(r.anth)+'</p><p><b>Mathematics:</b> '+html(r.math)+'</p><p><b>Complexity:</b> '+html(r.complex)+'</p><p><b>Evidence:</b> '+html(r.data)+'</p></div><p><b>Potential output:</b> '+html(r.output)+'</p>','research-card')).join('')+'</div>';
head+=sec('Research notebook','Stored locally');
head+=card('<label class="field">Research questions, faculty outreach, paper outlines<textarea id="researchNotes" onchange="Degree.set(\'researchNotes\',this.value)" placeholder="Notes, citations, ethical considerations…">'+html(S.researchNotes||'')+'</textarea></label><p class="footnote">Export your data frequently. This site does not send notes to a cloud database.</p>');
}else if(sub==='path'){
const steps=[['01','Mathematical foundations','Calculus, proofs, linear algebra, probability and differential equations','Undergraduate math'],['02','Core anthropology','Culture, kinship, ethnography, political ecology, fieldwork ethics','IGNOU MAN-101 to MAN-110'],['03','Network science','Graphs, centrality, random networks, diffusion, robustness','Barabási Network Science'],['04','Systems and simulation','Feedback, ODEs, state space, Monte Carlo and agent-based models','MUJ DMMEC2; Complexity Explorer'],['05','Pilot mixed-methods study','Ethnographic interviews + network data + quantitative model','Consent, measurement, preregistration'],['06','Research communication','Reproducible repo, literature review, manuscript and conference abstract','Avoid predatory journals; get supervisor feedback']];
head+=sec('A coherent research sequence','A 12–24 month independent plan, not university deadlines');
head+=card('<div class="timeline">'+steps.map(s=>'<div class="timeline-item"><span class="stepbadge">'+s[0]+'</span><div><h4>'+s[1]+'</h4><p>'+s[2]+'</p><span class="tiny-badge">'+s[3]+'</span></div></div>').join('')+'</div>');
head+=sec('Research methods shelf')+card(chip('https://networksciencebook.com/','Free Network Science textbook')+chip('https://www.complexityexplorer.org/','Complexity Explorer')+chip('https://www.santafe.edu/','Santa Fe Institute')+chip('https://www.complexityexplorer.org/courses','Open courses')+chip('https://www.openalex.org/','OpenAlex research')+chip('https://www.crossref.org/','Crossref DOI metadata')+'<p class="small muted">Institutional pages are discovery resources, not promises of open internships or supervisor availability.</p>');
}else if(sub==='reading'){
head+=bookShelf('Complexity · open textbook')+bookShelf('Complexity · nonfiction')+bookShelf('Complexity · fiction')+learningResources('Complexity');
}else if(sub==='papers'){
head+=papersUI('Complexity');
}else if(sub==='routine'){
head+=notice('Adaptive by manual tracking','Log actual study sessions; completed tasks and hours stay in this browser. A repeated schedule is suggested, not an official university timetable.');
head+=routineUI();
}shell(head);
}
function routineUI(){
const week=[['Mon','Mathematics foundations',60],['Tue','IGNOU core reading',50],['Wed','Mathematics exercises',70],['Thu','Ethnography / nonfiction',45],['Fri','Research literature / coding',90],['Sat','MUJ coursework and practice',150],['Sun','Assignments, revision and planning',120]];
const minutes=thisWeekMinutes(),target=Number(S.weekTarget||12),pct=target?Math.round(minutes/(target*60)*100):0;
let out='<div class="grid two">';
out+=metrics('Last 7 days',Math.round(minutes/60*10)/10+' h','Rolling logged hours against '+target+'h target',pct);
out+=card('<h3>Log a study session</h3><div class="formgrid"><label class="field">Domain<select id="logDomain"><option>Mathematics</option><option>Anthropology</option><option>Complexity</option></select></label><label class="field">Minutes<input id="logMinutes" type="number" min="5" max="600" step="5" value="45"></label><label class="field">Weekly target hours<input data-key="weekTarget" type="number" min="1" max="70" value="'+att(S.weekTarget||12)+'" onchange="Degree.saveInput(this)"></label></div><div class="actions-row"><button class="btn primary" onclick="Degree.logStudy()">Log time</button></div>');
out+='</div>';
out+=sec('Suggested weekly timetable','9h 45m core baseline, plus optional focused sessions');
let rows='';
week.forEach(function(w,i){
const key='weekly-'+i;
rows+='<div class="row-between" style="padding:9px 0;border-bottom:1px solid var(--line)"><label class="checkline" style="font-size:.83rem"><input type="checkbox" '+(S[key]?'checked':'')+' onchange="Degree.set(&quot;'+key+'&quot;,this.checked)"><span><b>'+html(w[0])+'</b> · '+html(w[1])+'</span></label><span class="small muted mono">'+w[2]+' min</span></div>';
});
out+=card(rows+'<div class="actions-row"><button class="btn" onclick="Degree.resetWeek()">Reset checkmarks</button></div>');
out+=sec('Recent study log');
const sessions=(S.sessions||[]).slice(-8).reverse();
let logs='<div class="empty">No study sessions logged yet.</div>';
if(sessions.length)logs=sessions.map(x=>'<div class="task"><span class="small">'+html(x.date)+' · '+html(x.domain)+'</span><b class="mono small">'+html(x.minutes)+' min</b></div>').join('');
out+=card(logs);
return out;
}
function renderLibrary(){
let head=hero('library',U.alex,'Open Alexandria',U.alexrepo,'View library on GitHub');
head+=notice('External library project','The Alexandria tab points to your separate library repository. Reading progress inside this Degree site stays local to this domain and is not automatically synchronized with Alexandria.');
head+=card('<div class="eyebrow">YOUR LONG-FORM KNOWLEDGE SYSTEM</div><h3 style="font-size:1.4rem">Alexandria — A Literary & Intellectual Atlas</h3><p>Use Alexandria to explore and connect books, essays and ideas beyond your degree curricula. Fiction can enrich anthropological imagination; nonfiction can supply frameworks for mathematical and systems reasoning.</p><div class="actions-row">'+L(U.alex,'Launch Alexandria','btn primary')+L(U.alexrepo,'Source repository','btn')+'</div>');
head+=sec('Reading bridges','A book can connect all three disciplines');
head+='<div class="grid three">'+card('<h3>Society and culture</h3><p>Literary ethnography, ritual, institutions, kinship, migration and contested identities.</p>'+L('https://openlibrary.org/search?q=The+Dispossessed+Le+Guin','The Dispossessed','linktext'))+card('<h3>Scientific models</h3><p>Proofs, numerical reasoning, uncertainty, inference and modelling.</p>'+L('https://hefferon.net/linearalgebra/','Linear Algebra (free)','linktext'))+card('<h3>Emergence and systems</h3><p>Feedback loops, network effects, path dependence and collective patterns.</p>'+L('https://networksciencebook.com/','Network Science (free)','linktext'))+'</div>';
head+=sec('Reading tracker','Selections from all your academic shelves');
const started=books.filter(b=>['Reading','Finished'].includes(S['book-'+b[0]]));
head+=card(started.length?started.map(b=>bookRow(b)).join(''):'<div class="empty">Mark books as Reading or Finished in the Anthropology, Mathematics or Complexity tabs to see them here.</div>');
shell(head);
}

const evidence=[
['Retrieval practice','Practice recalling without looking at notes; use feedback to correct errors.','Roediger & Karpicke (2006)','https://doi.org/10.1111/j.1467-9280.2006.01693.x'],
['Distributed practice','Space practice over time rather than cramming.','Cepeda et al. (2006)','https://doi.org/10.1037/0033-2909.132.3.354'],
['Practice testing and elaboration','Testing and explanation can improve retention; choose strategy to suit task.','Dunlosky et al. (2013)','https://doi.org/10.1177/1529100612453266'],
['Cognitive load','Use worked examples early, then progressively remove support.','Sweller (1988)','https://doi.org/10.1207/s15516709cog1202_4'],
['Implementation intentions','Specify when, where and how to act on goals.','Gollwitzer (1999)','https://doi.org/10.1037/0003-066X.54.7.493'],
['Method of loci','Use memorable spatial imagery to encode ordered information; it is not a substitute for conceptual understanding.','Maguire et al. (2003)','https://doi.org/10.1038/nn988']
];
const cards=[
['anth-culture','What does culture explain?','Anthropology','Explain cultural variation without assuming that every behaviour has one cause.'],
['math-proof','Prove that the square root of 2 is irrational.','Mathematics','Try contradiction. State every assumption.'],
['complex-diffusion','When can a local behaviour become a global cascade?','Complexity','Compare simple contagion and threshold diffusion.'],
['math-linear','Why do eigenvectors matter?','Mathematics','Connect linear transformations to repeated dynamics.'],
['anth-field','How would you study transport choice ethnographically?','Anthropology','Design observations, sampling and informed consent.'],
['complex-abm','How can agent rules create segregation?','Complexity','Explain the Schelling model and its limitations.']
];
const aiModes=[
['Socratic tutor','Ask one question at a time. Do not reveal the answer immediately. Diagnose my assumptions, offer progressive hints, and end with a new problem I must solve unaided.'],
['Proof coach','Review my mathematical proof. Identify the first unjustified step and ask me to repair it before providing a model proof. Distinguish intuition from rigorous argument.'],
['Ethnography critic','Critique my anthropological research question for sampling bias, positionality, ethical risks, alternative interpretations and evidence gaps. Ask for context before assuming facts.'],
['Simulation partner','Help design a reproducible Python experiment. Define assumptions, parameters, observables, controls, uncertainty and falsification tests before coding.'],
['Literature analyst','Help me compare the arguments, methods and limitations of the papers I provide. Do not invent citations. Mark unsupported claims and propose database searches.'],
['Writing critic','Challenge the logic, evidence, counterarguments and clarity of my draft. Give prioritized feedback without rewriting everything for me.']
];
const projects=[
['p1','Cultural Diffusion Simulator','Model threshold adoption on heterogeneous social networks.','NetworkX, Python, interviews'],
['p2','Mobility Adoption Observatory','Combine public registrations with policy and infrastructure changes.','Data analysis, causal diagrams'],
['p3','Computational Ethnography Toolkit','Ethics-first qualitative coding and cross-case comparison.','Text analysis, field methods'],
['p4','Urban Resilience Lab','Explore transport-network failures and access inequalities.','Graphs, Monte Carlo'],
['p5','Norms & Coordination Sandbox','Compare coordination games and social conventions.','Game theory, ABM'],
['p6','Mobility Inequality Atlas','Map differences in access to transport across communities.','GIS, spatial statistics'],
['p7','Institutional Evolution Model','Simulate feedback between institutions and individual strategies.','Evolutionary games'],
['p8','Research Knowledge Graph','Link concepts, sources, evidence and research questions.','Graph databases, citation data']
];
function renderHome(){
let h=hero('home',null,null,null,null);
const p1=donePct('done-',MA.slice(0,10)),p2=donePct('found-',foundations),mins=thisWeekMinutes(),review=cards.filter(x=>dueCard(x[0])).length;
h+='<div class="grid four">'+metrics('Anthropology',p1+'%','First-year courses marked complete',p1)+metrics('Mathematics',p2+'%','Foundation modules completed',p2)+metrics('Last 7 days',(mins/60).toFixed(1)+'h','Actual study time logged')+metrics('Practice queue',review,'Questions ready for recall')+'</div>';
h+=sec('Continue learning','Your next useful action');
h+='<div class="grid three">'+card('<div class="eyebrow">ANTHROPOLOGY</div><h3>Explore the curriculum</h3><p>Read a course, identify key debates, then test your understanding.</p><button class="btn primary" onclick="Degree.go(&quot;anth&quot;)">Continue anthropology</button>')+card('<div class="eyebrow">MATHEMATICS</div><h3>Build mathematical maturity</h3><p>Work from proofs and calculus towards graduate mathematics.</p><button class="btn primary" onclick="Degree.go(&quot;math&quot;)">Continue mathematics</button>')+card('<div class="eyebrow">LEARNING LAB</div><h3>Recall before rereading</h3><p>Try an active-recall question and schedule your next review.</p><button class="btn primary" onclick="Degree.go(&quot;learning&quot;)">Review concepts</button>')+'</div>';
h+=sec('Explore across disciplines');
h+=card('<div class="node-map"><svg viewBox="0 0 740 190" role="img" aria-label="Anthropology, mathematics and complexity are connected through original research"><g stroke="#9db4db" opacity=".7" stroke-width="2"><path d="M130 95 L365 95 L610 95 M130 95 Q370 -60 610 95 M130 95 Q370 245 610 95" fill="none"/></g><g fill="#465c94"><circle cx="130" cy="95" r="65"/><circle cx="610" cy="95" r="65"/></g><circle cx="365" cy="95" r="73" fill="#5958b7"/><g text-anchor="middle" font-size="15"><text x="130" y="91">Human</text><text x="130" y="110">systems</text><text x="365" y="91">Complexity</text><text x="365" y="110">science</text><text x="610" y="91">Mathematical</text><text x="610" y="110">models</text></g></svg></div><p class="small muted">Explore original questions about social networks, diffusion, urban resilience and institutions.</p><button class="btn" onclick="Degree.go(&quot;complex&quot;)">Enter the research lab</button>');
shell(h);
}
function dueCard(id){const o=S['review-'+id];return !o||!o.next||o.next<=new Date().toISOString().slice(0,10)}
function reviewCard(id,quality){
const old=S['review-'+id]||{step:0};
const step=quality==='again'?0:Math.min(5,(old.step||0)+1);
const gaps=[1,1,3,7,14,30],d=new Date();d.setDate(d.getDate()+gaps[step]);const next=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
S['review-'+id]={step:step,next:next,last:new Date().toISOString(),quality:quality};store();render();
}
function renderLearning(){
let h=hero('learning',null,null,null,null)+viewTabs([['practice','Active recall'],['science','Learning science'],['memory','Memory palace'],['goals','Goals & reflection']]);
if(sub==='practice'){
const due=cards.filter(x=>dueCard(x[0]));
h+=notice('Review scheduler','A transparent 1, 3, 7, 14 and 30-day interval ladder is used for practice prompts. It is a simple planner, not a validated measurement of mastery.');
h+=sec('Active recall','Attempt before revealing guidance');
h+='<div class="grid two">'+(due.length?due.map(x=>card('<div class="course-top">'+pill(x[2],'purple')+'</div><h3>'+html(x[1])+'</h3><details class="course-detail"><summary>Reveal guidance</summary><p>'+html(x[3])+'</p></details><div class="actions-row"><button class="btn" onclick="Degree.review(&quot;'+x[0]+'&quot;,&quot;again&quot;)">Need more practice</button><button class="btn primary" onclick="Degree.review(&quot;'+x[0]+'&quot;,&quot;good&quot;)">Recalled successfully</button></div>')).join(''):card('<h3>All scheduled questions reviewed</h3><p>Return tomorrow, or revisit the reading shelves and write new questions.'))+'</div>';
h+=sec('Error journal')+card('<label class="field">What did I misunderstand, and how will I test the correction?<textarea onchange="Degree.set(&quot;errorJournal&quot;,this.value)">'+html(S.errorJournal||'')+'</textarea></label>');
}else if(sub==='science'){
h+=notice('Research interpretation','Evidence differs by task and learner. Strategies should be applied thoughtfully; no single technique guarantees learning.');
h+='<div class="grid two">'+evidence.map(x=>card('<h3>'+html(x[0])+'</h3><p>'+html(x[1])+'</p><div class="small muted">'+html(x[2])+'</div><div class="source-links">'+L(x[3],'Read study')+'</div>')).join('')+'</div>';
}else if(sub==='memory'){
h+=sec('Build a memory palace','A mnemonic for sequences, not a replacement for mathematical reasoning');
h+=card('<p>Choose a familiar route and assign one vivid image to each location. Test yourself by mentally walking the route in order.</p><div class="grid two">'+['Front door','Hallway','Kitchen','Desk','Window','Garden'].map((x,i)=>'<label class="field">'+(i+1)+'. '+x+'<input data-memory="'+i+'" placeholder="What will you remember here?" value="'+att((S.palace||[])[i]||'')+'" onchange="Degree.palace(this)"></label>').join('')+'</div><div class="actions-row"><button class="btn" onclick="Degree.palaceTest()">Practice recall</button></div><p class="small muted">Inspired by the method of loci, discussed in Moonwalking with Einstein. See the research references for evidence and limitations.</p>');
}else{
h+=sec('Study intentions','Set realistic goals with specific conditions');
h+=card('<div class="formgrid"><label class="field">This week I will focus on<input data-key="goal" value="'+att(S.goal||'')+'" onchange="Degree.saveInput(this)" placeholder="e.g. epsilon-delta proofs"></label><label class="field">When and where<input data-key="intention" value="'+att(S.intention||'')+'" onchange="Degree.saveInput(this)" placeholder="e.g. 7:30pm at my desk"></label></div><label class="field">Weekly reflection<textarea data-key="reflection" onchange="Degree.saveInput(this)">'+html(S.reflection||'')+'</textarea></label>');
h+=routineUI();
}
shell(h);
}
function renderStudio(){
let h=hero('studio',null,null,null,null)+viewTabs([['projects','Project studio'],['ai','AI study modes'],['concepts','Concept explorer']]);
if(sub==='projects'){
h+=notice('Project maturity','These are research and product hypotheses. Publication-level novelty, datasets and ethics require verification before implementation.');
h+=sec('Build something worth investigating','Eight project starting points');
h+='<div class="grid two">'+projects.map(x=>card('<div class="row-between">'+pill('Prototype idea','purple')+'<label class="checkline small"><input type="checkbox" '+(S['project-'+x[0]]?'checked':'')+' onchange="Degree.set(&quot;project-'+x[0]+'&quot;,this.checked)"> Active</label></div><h3>'+html(x[1])+'</h3><p>'+html(x[2])+'</p><div class="small muted">'+html(x[3])+'</div>')).join('')+'</div>';
h+=sec('Project notes')+card('<label class="field">Hypothesis → evidence → prototype → limitations<textarea data-key="projectNotes" onchange="Degree.saveInput(this)">'+html(S.projectNotes||'')+'</textarea></label>');
}else if(sub==='ai'){
h+=notice('Real AI, not simulated AI','These are copyable prompts for a connected assistant. This static website does not send prompts to an AI model or grade your answers.');
h+=sec('Choose a learning mode','Ask for hints and critique before solutions');
h+='<div class="grid two">'+aiModes.map((x,i)=>card('<h3>'+html(x[0])+'</h3><p>'+html(x[1])+'</p><button class="btn" onclick="Degree.copyAI('+i+')">Copy learning prompt</button>')).join('')+'</div>';
h+=sec('A useful AI workflow')+card('<div class="timeline">'+[['1','Attempt alone','Write your own solution or hypothesis'],['2','Ask for a hint','Request one question or a diagnostic hint'],['3','Verify','Check against course notes, proofs or primary research'],['4','Transfer','Solve a different problem without assistance']].map(x=>'<div class="timeline-item"><span class="stepbadge">'+x[0]+'</span><div><h4>'+x[1]+'</h4><p>'+x[2]+'</p></div></div>').join('')+'</div>');
}else{
const concepts=[['Diffusion','Social contagion','Differential equations','Networks','Adoption models'],['Emergence','Institutions','Nonlinear systems','Agent-based modelling','Coordination'],['Resilience','Community adaptation','Graph robustness','Cascades','Infrastructure'],['Scaling','Urban anthropology','Power laws','Complex systems','Cities'],['Evolution','Cultural transmission','Probability','Evolutionary games','Norms']];
h+=sec('Ideas across disciplines','Choose a bridge from theory to experiment');
h+='<div class="grid two">'+concepts.map(x=>card('<h3>'+x[0]+'</h3><div class="course-detail"><p><b>Anthropology:</b> '+x[1]+'</p><p><b>Mathematics:</b> '+x[2]+'</p><p><b>Complexity:</b> '+x[3]+'</p><p><b>Application:</b> '+x[4]+'</p></div>')).join('')+'</div>';
}
shell(h);
}
function menu(){const list=nav.map(x=>x[1]).join(' · ');return list}
function openBackup(){
const content='<h3>Data, backup & preferences</h3><p class="small muted">Your checked courses, assignment evidence, local deadlines, notes, study sessions and reading status live in this device’s browser storage.</p><div class="actions-row"><button class="btn primary" onclick="Degree.exportData()">Download JSON backup</button></div><label class="field">Restore from backup<input type="file" accept="application/json,.json" onchange="Degree.importData(this)"></label><p class="footnote">Restoring replaces saved local data. No cloud sync or notifications are implemented.</p><div class="actions-row"><button class="btn" onclick="Degree.closeModal()">Close</button></div>';
document.getElementById('modal').innerHTML='<div>'+content+'</div>';document.getElementById('modal').classList.remove('hide');
}
const Degree={
review:reviewCard,
palace(el){const a=S.palace||Array(6).fill('');a[Number(el.dataset.memory)]=el.value;S.palace=a;store()},
palaceTest(){const a=S.palace||[];alert('Recall each location before checking your entries.\n\n'+['Front door','Hallway','Kitchen','Desk','Window','Garden'].map((x,i)=>x+': '+(a[i]||'—')).join('\n'))},
copyAI(i){const x=aiModes[i];const prompt=x[0]+'\n\n'+x[1]+'\n\nTopic: [insert my topic]\nMy attempt: [insert my work]';if(typeof navigator!=='undefined'&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(prompt).then(()=>alert('Prompt copied')).catch(()=>window.prompt('Copy this prompt:',prompt))}else window.prompt('Copy this prompt:',prompt)},
go(h){goto(h)},
sub(s){sub=s;search='';render();document.getElementById('view').scrollIntoView({block:'start'})},
filter(s){search=s;renderAnth();const el=document.getElementById('anthSearch');if(el){el.focus();el.setSelectionRange(s.length,s.length)}},
filterSem(v){S.anthSem=Number(v);store();renderAnth()},
set(key,val){S[key]=val;store();render()},
saveInput(el){S[el.dataset.key]=el.value;store();render()},
addTask(domain){const title=document.getElementById('newTask').value.trim(),date=document.getElementById('newDate').value,kind=document.getElementById('newKind').value,source=document.getElementById('newSource').value.trim();if(!title){alert('Enter a task title.');return}if(source&&!safeURL(source)){alert('Enter a valid https:// source URL, or leave it blank.');return}S.customTasks=S.customTasks||[];S.customTasks.push({id:'t'+Date.now().toString(36),title:title,date:date,domain:domain,kind:kind,source:source,done:false});store();render()},
taskToggle(id,v){(S.customTasks||[]).forEach(x=>{if(x.id===id)x.done=v});store();render()},
taskDelete(id){if(confirm('Remove this milestone?')){S.customTasks=(S.customTasks||[]).filter(x=>x.id!==id);store();render()}},
logStudy(){const min=Number(document.getElementById('logMinutes').value);if(!Number.isFinite(min)||min<5||min>600){alert('Enter minutes from 5 to 600');return}const dt=new Date();const localDate=dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0');S.sessions=S.sessions||[];S.sessions.push({date:localDate,minutes:min,domain:document.getElementById('logDomain').value});store();render()},
resetWeek(){if(confirm('Reset suggested weekly checkmarks?')){for(let i=0;i<7;i++)S['weekly-'+i]=false;store();render()}},
backup:openBackup,
closeModal(){document.getElementById('modal').classList.add('hide')},
toggleTheme(){document.body.classList.toggle('night');S.theme=document.body.classList.contains('night')?'night':'light';store();drawNav()},
exportData(){const blob=new Blob([JSON.stringify({app:'Degree Atlas',version:2,exported:new Date().toISOString(),data:S},null,2)],{type:'application/json'});const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download='degree-atlas-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),2000)},
importData(input){const file=input.files&&input.files[0];if(!file)return;const reader=new FileReader();reader.onload=function(){try{const src=JSON.parse(reader.result);const data=src&&src.app==='Degree Atlas'?src.data:src;if(!data||typeof data!=='object'||Array.isArray(data))throw Error('Invalid object');if(confirm('Replace all locally saved Degree Atlas progress with this backup?')){S=data;store();Degree.closeModal();render()}}catch(e){alert('Backup could not be read: '+e.message)}};reader.readAsText(file)}
};
window.Degree=Degree;
if(S.theme==='night')document.body.classList.add('night');
document.getElementById('nightbtn').onclick=Degree.toggleTheme;
document.getElementById('backupbtn').onclick=openBackup;
document.getElementById('modal').onclick=function(e){if(e.target===this)Degree.closeModal()};
window.addEventListener('hashchange',route);
route();
})();