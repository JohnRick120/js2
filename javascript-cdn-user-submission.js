"use strict";
let submissionForm = document.getElementById('submission-form');
function close_add_warning() {
    let popup = document.getElementById('checkbox_warning101ID');
    setTimeout(function () {
        popup.style.display = 'none';
        document.body.removeChild(popup);
    }, 3000);
}
function add_warning() {
    var popup = document.createElement("div");
    popup.className = "checkbox_warning101";
    popup.id = "checkbox_warning101ID";
    let popupMessage = `
        <p>You need to agree to the Rules and Terms of Service before uploading any content! </p>
    `;
    popup.innerHTML = popupMessage;
    document.body.appendChild(popup);
    popup.style.display = "flex";
    popup.style.flexDirection = 'column';
    close_add_warning();
}
submissionForm.addEventListener('submit', function (event) {
    let checkBox_submission = document.getElementById('agreement');
    if (checkBox_submission.checked) {
        event.submit();
    }
    else {
        event.preventDefault();
        add_warning();
    }
});
function close_rules_tab() {
    let mobile_search_barID = document.getElementById('rules_tabID');
    document.body.removeChild(mobile_search_barID);
    mobile_search_barID.style.display = 'none';
}
;
function open_rules_tab() {
    var mobileUserPanel = document.createElement("div");
    mobileUserPanel.className = "rules_tab";
    mobileUserPanel.id = "rules_tabID";
    let popup12Message = `
        <div class="rules_tab1">

                <div class="rules_tab_header">
                    <h1>Uploading Rules & Guidelines:</h1>
                    <button onclick="close_rules_tab()"><i class="fa-solid fa-circle-xmark"></i></button>
                </div>

                <p>
                    Uploading content to xoDice you agree to these rules and guidelines 
                    while also agreeing fully with our Terms of Service. And our Privacy Policy.
                </p>

                <p>
                    By uploading to xoDice.com you agree with the following:
                </p>

                <hr>

                <h5><b>Rules:</b></h5>

                <ul>
                    <li>You will not upload content that is not yours or you do not have the rights or permissions to upload.</li>
                    <li>The content herein does not content any child abuse content.</li>
                    <li>The content herein does not violate any local laws.</li>
                    <li>The content herein does not include any mentions of children or child.</li>
                    <li>The content herein does not contain sweepstakes, contests, or lotteries, or otherwise related to gambling.</li>
                    <li>The content herein does not contain non-consensual or illegal in any form, including but not limited to fraudulent, defamatory, libelous, harassing, or otherwise unlawful material.</li>
                    <li>The content herein does not include gore or any obscene content.</li>
                    <li>You fully understand that processing your video may take up to 24 hours or longer.</li>
                    <li>You fully agree to accept these rules and our Terms of Service and any future changes to this document and others like it.</li>
                    <li>You fully agree to accept Prohibited Uses section of our Terms of Service agreement, along with Sub-Licensing.</li>
                </ul>


                <h5><b>Guidelines:</b></h5>

                <ul>
                    <li>Your uploaded content should be less than or equal to 40 mb. If it is a video form content.</li>
                    <li>For the best processing time your content should be in the .WebM video format.</li>
                    <li>If you content has elements of forced sex or kiddnapping, the video herein must have reasonable and deliberate acts or gestures insinuating full consent of the act therein.</li>
                    <li>BDSM and S&M content is fully allowed to be uploaded, however if your content has cutting or blood in it, we must take a longer processing time to ensure it does not fall under gore content.</li>
                    <li>Gore Content is <b>NOT ALLOWED!</b></li>
                </ul>
            

                
        </div>
    `;
    mobileUserPanel.innerHTML = popup12Message;
    document.body.appendChild(mobileUserPanel);
    mobileUserPanel.style.display = "flex";
    mobileUserPanel.style.flexDirection = 'column';
}
