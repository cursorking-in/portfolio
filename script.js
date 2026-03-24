const modal = document.getElementById("modal");
const body = document.getElementById("modal-body");

const projects = [
{
title: "Voice Dataset QA",
content: "Worked on large Hindi voice datasets. Focused on pronunciation, tone, and natural delivery across speakers."
},
{
title: "AI Evaluation",
content: "Reviewed AI-generated responses focusing on clarity, tone, and real conversational usefulness."
},
{
title: "Multimodal QA",
content: "Worked across text, audio, and image datasets ensuring consistency and correct labeling."
},
{
title: "Robotics Data",
content: "Generated real-world behavioral data through structured tasks to train AI systems."
}
];

function openModal(i){
    modal.style.display = "block";
    body.innerHTML = "<h2>" + projects[i].title + "</h2><p>" + projects[i].content + "</p>";
}

function closeModal(){
    modal.style.display = "none";
}

window.onclick = function(e){
    if(e.target === modal){
        closeModal();
    }
}