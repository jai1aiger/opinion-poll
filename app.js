// 15 Ground-Level Student Team Member Profiles
const defaultTeamMembers = [
    {
        id: "viswanath",
        filename: "NEC_ECell_Motivation_Expectations_Vegisetti_Kasi_Viswanath.pdf",
        name: "Vegisetti Kasi Viswanath",
        role: "Team Leader & Head of R&D (Product Coordinator)",
        motivation: "As an engineering student leading our team, my motivation comes from bringing our project ideas to life in the college lab. I enjoy dividing tasks among team members, organizing late-night work sessions after classes, and making sure our prototype keeps progressing. However, I know my biggest personal hurdle is public speaking and formal presentation. I am much more comfortable building things and organizing work in the workshop than giving speeches in front of an audience.\n\nTo me, being a student team leader isn't about standing in the spotlight--it's about staying late to help fix hardware bugs, keeping everyone motivated during exam weeks, and making sure we deliver a working project we can all be proud of.",
        expectations: "I expect E-Cell to help me step out of my shell and build confidence in communication. While I can coordinate team tasks and technical work, I want to learn how to present our student project clearly and confidently to judges without getting nervous.\n\nThrough NEC, I hope to learn how successful student startups get started, how to manage team responsibilities effectively, and how to turn a college project into something real with proper guidance from mentors."
    },
    {
        id: "rajesh",
        filename: "NEC_ECell_Motivation_Expectations_Madiki_Rajesh.pdf",
        name: "Madiki Rajesh",
        role: "Hardware & Electronics Specialist (Product Engineering)",
        motivation: "My passion is working hands-on with hardware--soldering microcontrollers, connecting sensors on breadboards, and testing circuits in our lab. Last month, I spent hours troubleshooting a loose wire connection on our sensor module, which taught me that building a working prototype takes a lot of patience. A breadboard setup on a lab desk is just the first step.\n\nWorking on this student startup isn't about flashy titles for me; it's about the excitement of seeing a circuit board actually work and solve a real problem. I want to keep experimenting, learning from mistakes, and building reliable hardware with our team.",
        expectations: "I expect E-Cell to help us move beyond basic breadboard setups. In college labs we learn basic theory, but we rarely learn how to design clean custom PCBs or source affordable electronic components on a tight student budget.\n\nThrough NEC, I want to get practical advice from hardware mentors, learn how to design better enclosures for our project, and figure out how student teams can build durable hardware prototypes without overspending."
    },
    {
        id: "lokesh",
        filename: "NEC_ECell_Motivation_Expectations_Sivarathri_Lokesh.pdf",
        name: "Sivarathri Lokesh",
        role: "Software & Platform Developer (Product Engineering)",
        motivation: "My motivation comes from writing code that brings our hardware to life. As a student developer, I spend time writing microcontroller firmware, searching forums like Stack Overflow to fix bugs, and creating simple web dashboards for our project data.\n\nBuilding software for a student startup is exciting because it takes what we learn in computer science classes and applies it to a real project. I want our code to be simple, fast, and reliable so that anyone using our system has a smooth experience.",
        expectations: "I am looking to E-Cell for guidance on how to structure software for real-world use. In college assignments, we write code for grades, but here we need to write code that real people can rely on.\n\nI expect NEC to help me learn best practices for hosting our web backend affordably, connecting hardware data smoothly, and turning a student coding project into a functional app under the guidance of tech mentors."
    },
    {
        id: "tarun",
        filename: "NEC_ECell_Motivation_Expectations_Tarun_Kumar_Dasari.pdf",
        name: "Tarun Kumar Dasari",
        role: "Field Execution Lead (Operations & Groundwork)",
        motivation: "I believe you can't test a project just by sitting inside a college classroom. My motivation comes from taking our prototype outside campus, testing it in real conditions, and seeing how people actually use it.\n\nWhether it's testing our setup under direct sunlight or getting honest feedback from local vendors, ground testing shows us what's working and what breaks. Doing this groundwork helps our team fix problems early and build something truly useful.",
        expectations: "I expect E-Cell to teach us how to conduct field tests systematically. As students, we know how to build a basic model, but we need to learn how to gather proper user feedback and improve our design based on real-world usage.\n\nThrough NEC, I hope to learn from experienced founders about running ground operations, talking to early adopters, and making our student project practical for everyday users."
    },
    {
        id: "sanjay",
        filename: "NEC_ECell_Motivation_Expectations_Sanjay_Kumar_Pedini.pdf",
        name: "Sanjay Kumar Pedini",
        role: "Pitch & Communication Lead (Commercial Strategy)",
        motivation: "As our team's coordinator and communication lead, my motivation is to connect our technical work with the outside world. I realized early on that even if our team builds a great prototype in the lab, it won't make an impact unless we can explain our idea clearly to others.\n\nI handle outreach, coordinate with mentors, organize our team presentation slides, and keep everyone updated. For me, entrepreneurship is about teamwork, clear communication, and sharing our vision with enthusiasm.",
        expectations: "I expect E-Cell to help me improve my presentation and storytelling skills. I want to learn how to build a clean, effective student pitch deck and explain our project clearly to judges and mentors.\n\nThrough NEC, I aim to connect our student team with incubators, learn from experienced speakers, and gain confidence in representing our project at national student competitions."
    },
    {
        id: "saipadma",
        filename: "NEC_ECell_Motivation_Expectations_Althi_Saipadma.pdf",
        name: "Althi Saipadma",
        role: "Visual & Web UI Designer (Product Marketing)",
        motivation: "My motivation comes from design and digital media. I enjoy creating posters on Canva, managing our team's social media pages, and designing a simple, clean web interface for our project. Good visuals help people understand what our student team is building.\n\nI want to make sure our app screens and digital content look friendly, professional, and easy to navigate for non-technical users. Presenting our project cleanly online gives our team a strong identity.",
        expectations: "I look to E-Cell for guidance on simple UI/UX design principles and digital outreach for student startups.\n\nI expect NEC to help me understand how to design user-friendly screens, showcase our project online effectively, and learn how small student teams can build an engaged audience for their ideas."
    },
    {
        id: "mohan",
        filename: "NEC_ECell_Motivation_Expectations_Tanara_Mohan.pdf",
        name: "Tanara Mohan",
        role: "Hardware Assembly & Fabrication (Product Engineering)",
        motivation: "Working in the hardware section alongside Rajesh, my drive comes from physical assembly and soldering. I focus on mounting components securely, cutting project boxes, and organizing our lab tools so that everything stays neat and safe.\n\nIt's really satisfying to see loose wires and components turn into a sturdy, handheld box. My focus is on making sure our hardware build is neat, durable, and doesn't fall apart during testing or transport.",
        expectations: "I expect E-Cell to teach us practical hardware assembly techniques and safety measures for student projects.\n\nThrough NEC, I want to learn how to make clean product enclosures, protect circuits from overheating, and build reliable hardware prototypes on a student budget with guidance from workshop mentors."
    },
    {
        id: "govindu",
        filename: "NEC_ECell_Motivation_Expectations_Lokavarapu_Govindu.pdf",
        name: "Lokavarapu Govindu",
        role: "Product Budget & Finance Analyst (Commercial Strategy)",
        motivation: "My interest is in tracking our team's project expenses and budgeting. As students, we work with limited funds, so it's important to track every rupee spent on components, prototyping materials, and travel for testing.\n\nI keep track of component costs and help calculate how much our product would cost if we produced it for real users. My goal is to make sure our student project remains financially practical and affordable.",
        expectations: "I am looking to E-Cell for simple, practical advice on startup budgeting and cost management.\n\nI expect NEC to teach us how to estimate product manufacturing costs, manage small project budgets efficiently, and understand how student startups can apply for small grants and competition funding."
    },
    {
        id: "pavani",
        filename: "NEC_ECell_Motivation_Expectations_Bathula_Chinmai_Pavani.pdf",
        name: "Bathula Chinmai Pavani",
        role: "Market Survey & User Insights Lead (Product Research)",
        motivation: "My motivation comes from market research and talking to potential users. Before building a project, we need to know if people actually need it and what existing solutions they currently use.\n\nI enjoy creating survey forms, talking to students and local shop owners, and analyzing their responses. My goal is to make sure our team builds something that solves a real problem people care about.",
        expectations: "I expect E-Cell to teach us structured methods for student market research and customer validation.\n\nThrough NEC, I want to learn how to ask the right survey questions, analyze market feedback accurately, and help our team focus on features that real users actually want."
    },
    {
        id: "hasini",
        filename: "NEC_ECell_Motivation_Expectations_Hasini_Yedla.pdf",
        name: "Hasini Yedla",
        role: "User Feedback & Usability Lead (Product Research)",
        motivation: "I am motivated by user testing and gathering honest feedback. Technology should be easy and natural for anyone to use, not just for engineering students who built it.\n\nI watch how people interact with our prototype, note down where they get confused, and share that feedback with our hardware and software teammates. My goal is to make our project user-friendly and helpful for everyday people.",
        expectations: "I expect E-Cell to guide us on effective user testing and feedback collection methods for student projects.\n\nI want to learn how to conduct user testing sessions, turn feedback into quick design improvements, and ensure our project makes a positive impact in our community."
    },
    {
        id: "janaki",
        filename: "NEC_ECell_Motivation_Expectations_Bhoomireddi_Janaki.pdf",
        name: "Bhoomireddi Janaki",
        role: "Component & Logistics Lead (Field Operations)",
        motivation: "My focus is on sourcing electronic components and supplies. Finding the right parts at reasonable prices is essential when working on a student project with a limited budget.\n\nI compare prices across local electronics shops and online vendors, check delivery times, and make sure our team has the parts they need for testing. My motivation is to keep our hardware building schedule running without component delays.",
        expectations: "I look to E-Cell for advice on sourcing components and finding reliable vendors for student hardware projects.\n\nThrough NEC, I hope to learn how to manage component lists efficiently, find student discounts on parts, and plan sourcing lead times effectively."
    },
    {
        id: "beela",
        filename: "NEC_ECell_Motivation_Expectations_Yagnasri_Beela.pdf",
        name: "Yagnasri Beela",
        role: "Quality Assurance & Fail-Safe QA (Product Engineering)",
        motivation: "My motivation comes from testing our setup to make sure nothing breaks during demonstrations. In student projects, loose wires or code bugs can cause unexpected failures during presentations.\n\nI run basic testing routines--checking battery connections, testing sensor responses, and verifying that the app doesn't crash. My goal is to ensure our prototype works reliably every time we show it to mentors or judges.",
        expectations: "I expect E-Cell to guide our team on basic testing practices and quality checks for student prototypes.\n\nI want to learn how to build simple test checklists, prevent hardware short-circuits, and make sure our project is reliable and ready for competition judging."
    },
    {
        id: "ananya",
        filename: "NEC_ECell_Motivation_Expectations_Ananya_Sharma.pdf",
        name: "Ananya Sharma",
        role: "Ground Operations & Field Trial Specialist (Operations)",
        motivation: "My motivation is on-the-ground execution during field trials. I coordinate field setups, manage safety protocols during testing, and collect real-time performance metrics while our project is operating in public or lab environments.",
        expectations: "I expect E-Cell to guide our operations team on managing field trial risks, building smooth workflows for student deployments, and handling operational logistics efficiently."
    },
    {
        id: "aditya",
        filename: "NEC_ECell_Motivation_Expectations_Aditya_Patel.pdf",
        name: "Aditya Patel",
        role: "Product Marketing & Social Content Lead (Marketing)",
        motivation: "I am motivated by spreading the word about our student project through creative digital campaigns, social media posts, and interactive web content. Getting people excited about our startup idea is what drives me every day.",
        expectations: "I look to E-Cell for mentorship on digital branding strategy, marketing automation for early-stage student startups, and building an engaged audience."
    },
    {
        id: "vikramaditya",
        filename: "NEC_ECell_Motivation_Expectations_Vikramaditya_Verma.pdf",
        name: "Vikramaditya Verma",
        role: "External Relations & Partner Manager (Commercial Strategy)",
        motivation: "My drive comes from connecting our startup team with industry partners, external mentors, and potential student investors. I focus on expanding our network and building strong relationships outside college.",
        expectations: "I expect E-Cell IIT Bombay to connect Team Titan with corporate incubators, angel investor networks, and industry leaders to help scale our student prototype."
    }
];

const MAX_CANDIDATES = 15;
const SYNC_URL = "https://raw.githubusercontent.com/jai1aiger/opinion-poll/main/team_data.json";
const API_URL = "https://api.github.com/repos/jai1aiger/opinion-poll/contents/team_data.json";
const GITHUB_PAT = atob("Z2l0aHViX3BhdF8xMUJSWkFFUEkwRXFoVUdEaHJxVThYXzJuWFFNTU8yUG1TelVXY29sVEt6UUN0SE9saXFTTld5Rk9HNzdLelBqZUhBV0wzWVpTNFdIc01GMTFpcQ==");

// Active State
let currentMemberId = "viswanath";
let teamData = [...defaultTeamMembers];
let isSaving = false;

function saveTeamData() {
    showSaveStatus("Saving live to Cloud...");
    saveToCloudDebounced();
}

let saveTimeout = null;
function saveToCloudDebounced() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(pushTeamDataToCloud, 800);
}

async function fetchCloudTeamData() {
    if (isSaving) return;
    updateSyncStatus("syncing", "Syncing from cloud...");
    try {
        const res = await fetch(SYNC_URL + '?t=' + Date.now());
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                teamData = data;
                updateSyncStatus("success", "Live Shared Cloud Synced");
                if (!teamData.find(x => x.id === currentMemberId)) {
                    currentMemberId = teamData[0].id;
                }
                renderMemberList();
                loadFormValues();
                updatePdfPreview();
                return;
            }
        }
    } catch(e) {
        console.warn("Cloud fetch error:", e);
    }
    updateSyncStatus("offline", "Cloud Sync Pending");
}

async function pushTeamDataToCloud() {
    isSaving = true;
    updateSyncStatus("syncing", "Saving to cloud...");
    try {
        let sha = "";
        const getRes = await fetch(API_URL + '?t=' + Date.now(), {
            headers: { 'Authorization': `Bearer ${GITHUB_PAT}` }
        });
        if (getRes.ok) {
            const getInfo = await getRes.json();
            sha = getInfo.sha;
        }

        const contentStr = JSON.stringify(teamData, null, 4);
        const encodedContent = btoa(unescape(encodeURIComponent(contentStr)));

        const payload = {
            message: `Live update team candidates data (${teamData.length} members)`,
            content: encodedContent,
            branch: 'main'
        };
        if (sha) payload.sha = sha;

        const putRes = await fetch(API_URL, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${GITHUB_PAT}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (putRes.ok) {
            updateSyncStatus("success", "Live Shared Cloud Synced");
            showSaveStatus("Saved live to Cloud (Everyone can view)");
        } else {
            updateSyncStatus("offline", "Saving to Cloud...");
        }
    } catch(e) {
        console.error("Cloud push failed:", e);
        updateSyncStatus("offline", "Sync Retry Pending");
    } finally {
        isSaving = false;
    }
}

function updateSyncStatus(type, label) {
    const badge = document.getElementById("syncStatusBadge");
    if (!badge) return;

    if (type === "syncing") {
        badge.style.background = "rgba(59, 130, 246, 0.15)";
        badge.style.color = "#60a5fa";
        badge.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${label}`;
    } else if (type === "success") {
        badge.style.background = "rgba(16, 185, 129, 0.15)";
        badge.style.color = "#34d399";
        badge.innerHTML = `<i class="fa-solid fa-globe"></i> ${label}`;
    } else {
        badge.style.background = "rgba(245, 158, 11, 0.15)";
        badge.style.color = "#fbbf24";
        badge.innerHTML = `<i class="fa-solid fa-cloud-arrow-up"></i> ${label}`;
    }
}

function showSaveStatus(text) {
    const el = document.getElementById("saveStatus");
    if (el) {
        el.innerHTML = `<i class="fa-solid fa-cloud-check"></i> ${text || "Saved live to Cloud"}`;
        el.style.opacity = "1";
        setTimeout(() => { el.style.opacity = "0.8"; }, 2000);
    }
}

function renderMemberList() {
    const listEl = document.getElementById("memberList");
    listEl.innerHTML = "";
    
    teamData.forEach(m => {
        const li = document.createElement("li");
        li.className = `member-item ${m.id === currentMemberId ? 'active' : ''}`;
        li.onclick = () => selectMember(m.id);
        
        li.innerHTML = `
            <div class="member-name">${escapeHtml(m.name)}</div>
            <span class="member-role-badge">${escapeHtml(m.role)}</span>
        `;
        listEl.appendChild(li);
    });

    // Update candidate count & badges
    const countEl = document.getElementById("candidateCount");
    if (countEl) countEl.textContent = teamData.length;

    const addBtn = document.getElementById("addCandidateBtn");
    if (addBtn) {
        if (teamData.length >= MAX_CANDIDATES) {
            addBtn.disabled = true;
            addBtn.classList.add("btn-disabled");
            addBtn.innerHTML = `<i class="fa-solid fa-user-xmark"></i> Max Limit Reached (15/15)`;
        } else {
            addBtn.disabled = false;
            addBtn.classList.remove("btn-disabled");
            addBtn.innerHTML = `<i class="fa-solid fa-user-plus"></i> Add Candidate (<span id="candidateCount">${teamData.length}</span>/15)`;
        }
    }

    const headerBadge = document.getElementById("headerMemberBadge");
    if (headerBadge) {
        headerBadge.innerHTML = `<i class="fa-solid fa-users"></i> ${teamData.length} Team Members`;
    }

    const exportBtn = document.getElementById("exportAllBtn");
    if (exportBtn) {
        exportBtn.innerHTML = `<i class="fa-solid fa-file-pdf"></i> Download All ${teamData.length} PDFs`;
    }

    // Toggle delete candidate button
    const deleteBtn = document.getElementById("deleteMemberBtn");
    if (deleteBtn) {
        const currentMember = teamData.find(x => x.id === currentMemberId);
        if (currentMember && (currentMember.isCustom || teamData.length > 12)) {
            deleteBtn.style.display = "inline-flex";
        } else {
            deleteBtn.style.display = "none";
        }
    }
}

function selectMember(id) {
    currentMemberId = id;
    renderMemberList();
    loadFormValues();
    updatePdfPreview();
}

function loadFormValues() {
    const m = teamData.find(x => x.id === currentMemberId);
    if (!m) return;
    
    document.getElementById("memberName").value = m.name;
    document.getElementById("memberRole").value = m.role;
    document.getElementById("motivationText").value = m.motivation;
    document.getElementById("expectationsText").value = m.expectations;
}

function addCandidate() {
    if (teamData.length >= MAX_CANDIDATES) {
        alert("Maximum limit of 15 team members / candidates reached!");
        return;
    }

    const candidateNum = teamData.length + 1;
    const newId = `candidate_${Date.now()}`;
    const newCandidate = {
        id: newId,
        filename: `NEC_ECell_Motivation_Expectations_Candidate_${candidateNum}.pdf`,
        name: `Candidate ${candidateNum}`,
        role: `Team Member (Student)`,
        motivation: `As a student member of Team Titan, my motivation comes from working collaboratively on our startup project, testing solutions, and taking on challenges to deliver a meaningful result.`,
        expectations: `I expect E-Cell IIT Bombay to provide mentorship, guidance on startup execution, and opportunities to present our work effectively.`,
        isCustom: true
    };

    teamData.push(newCandidate);
    saveTeamData();
    selectMember(newId);
}

function removeCandidate() {
    if (teamData.length <= 1) {
        alert("At least one candidate must remain in the team!");
        return;
    }

    const currentMember = teamData.find(x => x.id === currentMemberId);
    if (!currentMember) return;

    if (confirm(`Are you sure you want to remove "${currentMember.name}"? This will delete it for everyone.`)) {
        teamData = teamData.filter(x => x.id !== currentMemberId);
        saveTeamData();
        currentMemberId = teamData[0].id;
        renderMemberList();
        loadFormValues();
        updatePdfPreview();
    }
}

function attachFormListeners() {
    const inputs = ["memberName", "memberRole", "motivationText", "expectationsText"];
    inputs.forEach(id => {
        document.getElementById(id).addEventListener("input", () => {
            const m = teamData.find(x => x.id === currentMemberId);
            if (m) {
                m.name = document.getElementById("memberName").value;
                m.role = document.getElementById("memberRole").value;
                m.motivation = document.getElementById("motivationText").value;
                m.expectations = document.getElementById("expectationsText").value;
                m.filename = `NEC_ECell_Motivation_Expectations_${m.name.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
                saveTeamData();
                renderMemberList();
                updatePdfPreview();
            }
        });
    });

    document.getElementById("addCandidateBtn").addEventListener("click", addCandidate);
    
    const deleteBtn = document.getElementById("deleteMemberBtn");
    if (deleteBtn) {
        deleteBtn.addEventListener("click", removeCandidate);
    }

    const refreshBtn = document.getElementById("refreshCloudBtn");
    if (refreshBtn) {
        refreshBtn.addEventListener("click", () => {
            fetchCloudTeamData();
        });
    }

    document.getElementById("resetBtn").addEventListener("click", () => {
        const def = defaultTeamMembers.find(x => x.id === currentMemberId);
        if (def) {
            const m = teamData.find(x => x.id === currentMemberId);
            Object.assign(m, def);
            saveTeamData();
            loadFormValues();
            renderMemberList();
            updatePdfPreview();
        } else {
            alert("This candidate was added manually. Reset applies to default profiles.");
        }
    });

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
            
            btn.classList.add("active");
            document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
            if (btn.dataset.tab === "preview") {
                updatePdfPreview();
            }
        });
    });

    document.getElementById("downloadPdfBtn").addEventListener("click", downloadCurrentPdf);
    document.getElementById("downloadPdfPreviewBtn").addEventListener("click", downloadCurrentPdf);
    document.getElementById("exportAllBtn").addEventListener("click", downloadAllPdfs);
}

function updatePdfPreview() {
    const m = teamData.find(x => x.id === currentMemberId);
    if (!m) return;

    document.getElementById("pdfName").textContent = m.name;
    document.getElementById("pdfRole").textContent = m.role;

    document.getElementById("pdfMotivation").innerHTML = m.motivation.split("\n\n").map(p => `<p>${escapeHtml(p)}</p>`).join("");
    document.getElementById("pdfExpectations").innerHTML = m.expectations.split("\n\n").map(p => `<p>${escapeHtml(p)}</p>`).join("");
}

function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function downloadCurrentPdf() {
    const m = teamData.find(x => x.id === currentMemberId);
    updatePdfPreview();
    
    const element = document.getElementById("pdfTemplate");
    const opt = {
        margin:       15,
        filename:     m.filename || `NEC_Submission_${m.name.replace(/\s+/g, '_')}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
}

async function downloadAllPdfs() {
    alert(`Starting download of all ${teamData.length} team member PDFs sequentially...`);
    for (let i = 0; i < teamData.length; i++) {
        selectMember(teamData[i].id);
        await new Promise(r => setTimeout(r, 600));
        downloadCurrentPdf();
    }
}

function initPortal() {
    renderMemberList();
    loadFormValues();
    attachFormListeners();
    updatePdfPreview();
    fetchCloudTeamData();
    
    // Auto-poll cloud every 7 seconds so edits made by others load live!
    setInterval(fetchCloudTeamData, 7000);
}

document.addEventListener("DOMContentLoaded", () => {
    initPortal();
});
