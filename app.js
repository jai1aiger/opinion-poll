// 15 Consolidated Unique Team Member Profiles
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
        id: "d_tarun_kumar",
        filename: "NEC_ECell_Motivation_Expectations_D_Tarun_Kumar.pdf",
        name: "D. Tarun Kumar",
        role: "Software Development & AI-ML Lead (Product Engineering)",
        motivation: "My motivation comes from developing AI-ML systems and real-time tracking dashboards, such as my Railway Fault Diagnosis system for detecting track cracks and train bogie defects. I enjoy building live monitoring dashboards that visualize real-time technical data clearly.",
        expectations: "I expect E-Cell to guide our technical team on scaling AI-ML software tools into full-fledged student startup products and connecting with industry tech mentors."
    },
    {
        id: "b_preethi",
        filename: "NEC_ECell_Motivation_Expectations_B_Preethi.pdf",
        name: "B. Preethi",
        role: "Research & Pitch Support (Product Research & ML)",
        motivation: "I am motivated by research, machine learning model training, and building predictive analytics dashboards, such as my Customer Churn Prediction and Retention Recommendation system. I enjoy translating complex ML model outputs into easy-to-understand insights.",
        expectations: "I expect E-Cell to provide research guidance, pitch presentation mentoring, and training on translating ML data into compelling startup pitches."
    },
    {
        id: "ch_neelaveni",
        filename: "NEC_ECell_Motivation_Expectations_Ch_Neelaveni.pdf",
        name: "Ch. Neelaveni",
        role: "Data Collection & Testing Lead (Product QA & Media)",
        motivation: "My drive comes from data collection, testing/debugging, and building practical platforms like my Multilingual Road Potholes Detection system with GPS and image validation. I also enjoy managing social media handles to communicate project impact.",
        expectations: "I look to E-Cell for mentorship on systematic software QA testing, structured data collection workflows, and user engagement strategies."
    },
    {
        id: "a_sai_padma",
        filename: "NEC_ECell_Motivation_Expectations_A_Sai_Padma.pdf",
        name: "A. Sai Padma",
        role: "ML Engineer & Web UI Designer (Product Marketing & Dev)",
        motivation: "My passion spans ML model training, full-stack web development, and predictive analytics, as demonstrated in my E-Commerce Delivery Prediction project for tracking on-time vs. delayed shipments using Python, SQL, and PowerBI.",
        expectations: "I expect E-Cell to guide us on deploying production-ready ML models, structuring full-stack web apps, and optimizing user interfaces."
    },
    {
        id: "govindu",
        filename: "NEC_ECell_Motivation_Expectations_Lokavarapu_Govindu.pdf",
        name: "Lokavarapu Govindu",
        role: "Data Analyst & Finance Manager (Operations & Budgeting)",
        motivation: "I am motivated by ground execution, project expense tracking, and data analytics, having worked on impactful projects like Kisan Seva (Leaf Disease Detection) and E-Commerce Dashboards using Python, Excel, PowerBI, and AI tools.",
        expectations: "I expect E-Cell to provide practical training on field data collection, product manufacturing cost estimation, and small startup budget management."
    },
    {
        id: "subhashini_ranga",
        filename: "NEC_ECell_Motivation_Expectations_Subhashini_Ranga.pdf",
        name: "Subhashini Ranga",
        role: "Product Marketing & Visual Designer (Marketing & Media)",
        motivation: "My motivation comes from creative content creation, visual design (Canva/Figma), and branding. In my InternSetu platform project, I designed user-focused features, created promotional campaigns, and led visual engagement for Google Student Ambassador (GSA) outreach.",
        expectations: "I expect E-Cell to provide guidance on product marketing strategies, brand identity development, and digital audience engagement."
    },
    {
        id: "m_rajesh",
        filename: "NEC_ECell_Motivation_Expectations_Madiki_Rajesh.pdf",
        name: "Madiki Rajesh",
        role: "Hardware & Electronics Lead (Product Engineering)",
        motivation: "My passion is working hands-on with hardware--soldering microcontrollers, connecting sensors on breadboards, and testing circuits in our lab. I also engage in video production, screenplay writing, and media content creation for our project promotions.",
        expectations: "I expect E-Cell to help us move beyond basic breadboard setups, design custom PCBs, and guide us on creating high-impact media pitch videos."
    },
    {
        id: "lokesh",
        filename: "NEC_ECell_Motivation_Expectations_Sivarathri_Lokesh.pdf",
        name: "Sivarathri Lokesh",
        role: "Software & Firmware Developer (Product Engineering)",
        motivation: "My motivation comes from writing code that brings our hardware to life. As a student developer, I spend time writing microcontroller firmware, searching forums like Stack Overflow to fix bugs, and creating simple web dashboards for our project data.",
        expectations: "I expect NEC to help me learn best practices for hosting our web backend affordably, connecting hardware data smoothly, and turning a student coding project into a functional app under the guidance of tech mentors."
    },
    {
        id: "tarun_dasari",
        filename: "NEC_ECell_Motivation_Expectations_Tarun_Kumar_Dasari.pdf",
        name: "Tarun Kumar Dasari",
        role: "Field Execution Lead (Operations & Groundwork)",
        motivation: "I believe you can't test a project just by sitting inside a college classroom. My motivation comes from taking our prototype outside campus, testing it in real conditions, and seeing how people actually use it.",
        expectations: "I expect E-Cell to teach us how to conduct field tests systematically. As students, we know how to build a basic model, but we need to learn how to gather proper user feedback and improve our design based on real-world usage."
    },
    {
        id: "sanjay",
        filename: "NEC_ECell_Motivation_Expectations_Sanjay_Kumar_Pedini.pdf",
        name: "Sanjay Kumar Pedini",
        role: "Pitch & Communication Lead (Commercial Strategy)",
        motivation: "As our team's coordinator and communication lead, my motivation is to connect our technical work with the outside world. I handle outreach, coordinate with mentors, organize our team presentation slides, and keep everyone updated.",
        expectations: "I expect E-Cell to help me improve my presentation and storytelling skills. I want to learn how to build a clean, effective student pitch deck and explain our project clearly to judges and mentors."
    },
    {
        id: "mohan",
        filename: "NEC_ECell_Motivation_Expectations_Tanara_Mohan.pdf",
        name: "Tanara Mohan",
        role: "Hardware Assembly & Fabrication (Product Engineering)",
        motivation: "Working in the hardware section alongside Rajesh, my drive comes from physical assembly and soldering. I focus on mounting components securely, cutting project boxes, and organizing our lab tools so that everything stays neat and safe.",
        expectations: "I expect E-Cell to teach us practical hardware assembly techniques and safety measures for student projects, helping us build durable enclosures on a student budget."
    },
    {
        id: "pavani",
        filename: "NEC_ECell_Motivation_Expectations_Bathula_Chinmai_Pavani.pdf",
        name: "Bathula Chinmai Pavani",
        role: "Market Survey & User Insights Lead (Product Research)",
        motivation: "My motivation comes from market research and talking to potential users. Before building a project, we need to know if people actually need it and what existing solutions they currently use.",
        expectations: "I expect E-Cell to teach us structured methods for student market research, customer validation, and survey form analysis."
    },
    {
        id: "hasini",
        filename: "NEC_ECell_Motivation_Expectations_Hasini_Yedla.pdf",
        name: "Hasini Yedla",
        role: "Commercial Strategy & External Affairs Lead",
        motivation: "My motivation comes from business strategy, user evaluation, and expanding external partnerships. I focus on developing sustainable commercial strategies, evaluating user feedback, and building external relations for our startup project.",
        expectations: "I expect E-Cell IIT Bombay to guide our team on commercial strategy, external stakeholder engagement, and connecting with startup incubators."
    },
    {
        id: "janaki",
        filename: "NEC_ECell_Motivation_Expectations_Bhoomireddi_Janaki.pdf",
        name: "Bhoomireddi Janaki",
        role: "Component & Logistics Lead (Field Operations)",
        motivation: "My focus is on sourcing electronic components and supplies. Finding the right parts at reasonable prices is essential when working on a student project with a limited budget.",
        expectations: "I look to E-Cell for advice on sourcing components, finding reliable vendors for student hardware projects, and managing supply lead times."
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
