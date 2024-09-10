"use strict";
window.addEventListener('load', function () {
    let pageOn = document.getElementById('page-on');
    let pageOnValue = pageOn.value;
    let current_on = document.getElementById(pageOnValue);
    current_on.style.borderBottom = '2px solid white';
    current_on.style.color = 'white';
    if (pageOnValue === 'faq') {
        let faw_current = document.getElementById('faq-general');
        faw_current.style.borderBottom = '2px solid rgb(64, 27, 27)';
    }
});
let server_status_6 = 'True';
let is_answer_open = false;
let current_answer_open = '';
function open_answer(question) {
    if (is_answer_open && current_answer_open !== question) {
        let answerElementClose = document.getElementById(`answer-${current_answer_open}`);
        answerElementClose.style.display = 'none';
        let answerElement = document.getElementById(`answer-${question}`);
        answerElement.style.display = 'block';
        is_answer_open = true;
        current_answer_open = question;
    }
    else if (is_answer_open && current_answer_open == question) {
        let answerElement = document.getElementById(`answer-${current_answer_open}`);
        answerElement.style.display = 'none';
        is_answer_open = false;
        current_answer_open = '';
    }
    else {
        let answerElement = document.getElementById(`answer-${question}`);
        answerElement.style.display = 'block';
        is_answer_open = true;
        current_answer_open = question;
    }
}
let main_issue = [];
function button_clicked(input) {
    if (main_issue.length > 0) {
        let improve_1 = document.getElementById(`improve-${main_issue[0]}`);
        improve_1.style.backgroundColor = 'rgb(101, 101, 101)';
        main_issue.length = 0;
        main_issue.push(input);
        let improve_ = document.getElementById(`improve-${input}`);
        improve_.style.backgroundColor = 'rgb(180, 50, 50)';
    }
    else {
        main_issue.push(input);
        let improve_ = document.getElementById(`improve-${input}`);
        improve_.style.backgroundColor = 'rgb(180, 50, 50)';
    }
}
const improveForm = document.getElementById('improveForm');
if (improveForm) {
    improveForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let issueTitle = document.getElementById('improve_feedback_title');
        let issueTitle_value = issueTitle.value;
        let issueFeedback = document.getElementById('feedback');
        let issueFeedback_value = issueFeedback.value;
        let issue_tag = main_issue[0];
        console.log(issueTitle_value);
        console.log(issueFeedback_value);
        console.log(issue_tag);
    });
}
function get_legal_URLS() {
    let urls = {};
    if (server_status_6 === 'True') {
        urls.pp_page = 'https://www.xodice.com/privacy_policy/';
        urls.tos = 'https://www.xodice.com/terms-of-use/';
        urls.notice = 'https://www.xodice.com/notice/';
        urls.contact = 'https://www.xodice.com/contact_us/';
        urls.faq = 'https://www.xodice.com/faq/';
        urls.dmca = 'https://www.xodice.com/DMCA/';
        urls.dmca_takedown = 'https://www.xodice.com/DMCA_takedown/';
        urls.law_2257 = 'https://www.xodice.com/law_2257/';
        urls.home = 'https://www.xodice.com/';
    }
    else {
        urls.pp_page = 'http://127.0.0.1:8000/privacy_policy/';
        urls.tos = 'http://127.0.0.1:8000/terms-of-use/';
        urls.notice = 'http://127.0.0.1:8000/notice/';
        urls.contact = 'http://127.0.0.1:8000/contact_us/';
        urls.faq = 'http://127.0.0.1:8000/faq/';
        urls.dmca = 'http://127.0.0.1:8000/DMCA/';
        urls.dmca_takedown = 'http://127.0.0.1:8000/DMCA_takedown/';
        urls.law_2257 = 'http://127.0.0.1:8000/law_2257/';
        urls.home = 'http://127.0.0.1:8000/';
    }
    return urls;
}
;
function close_mobile_nav_legal() {
    let mobile_search_barID = document.getElementById('mobile_navbar_optionsID');
    document.body.removeChild(mobile_search_barID);
    mobile_search_barID.style.display = 'none';
}
function open_mobile_nav_legal() {
    var mobileUserPanel = document.createElement("div");
    mobileUserPanel.className = "mobile_navbar_options";
    mobileUserPanel.id = "mobile_navbar_optionsID";
    let urls_legal = get_legal_URLS();
    let popup12Message = `

        <div class="legal_navbar_mobile_containter">

        
        <div class="legal_nav_containter">
        <div class="legal_nav_header"><button onclick="close_mobile_nav_legal()"><i class="fa-solid fa-circle-xmark"></i></button></div>
            <div class="legal_nav-mobile">

                <div class="link">
                    <a href="${urls_legal.home}">Home</a>
                </div>

                <div class="link">
                    <a href="${urls_legal.faq}" id="faq">FAQ</a>
                </div>
                <div class="link">
                    <a href="${urls_legal.tos}" id="terms">Terms of Use</a>
                </div>
                <div class="link">
                    <a href="${urls_legal.pp_page}" id="pp">Privacy Policy</a>
                </div>
                <div class="link">
                    <a href="${urls_legal.dmca}" id="dmca">DMCA</a>
                </div>
                <div class="link">
                    <a href="${urls_legal.dmca_takedown}" id="dmcaTake">DMCA Takedown</a>
                </div>
                <div class="link">
                    <a href="${urls_legal.law_2257}" id="2257">2257</a>
                </div>
                <div class="link">
                    <a href="${urls_legal.notice}" id="notice">Notice</a>
                </div>
            </div>
        </div>
            
        </div>

    `;
    mobileUserPanel.innerHTML = popup12Message;
    document.body.appendChild(mobileUserPanel);
    mobileUserPanel.style.display = "flex";
    mobileUserPanel.style.flexDirection = 'column';
}
;
