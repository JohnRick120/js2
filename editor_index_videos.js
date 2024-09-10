"use strict";
let popup_bullshit = document.getElementById('index_editor_popup');
let innerPopup_h5 = document.getElementById('wording_stuff');
let main_selector = document.getElementById('chooser');
let current_open_div = 'editor1';
main_selector.addEventListener('change', function (event) {
    let choosen = event.target.value;
    let closeDiv = document.getElementById(current_open_div);
    closeDiv.style.display = 'none';
    let openDiv = document.getElementById(choosen);
    openDiv.style.display = 'block';
    current_open_div = choosen;
});
function backEnd_request(pyFunction, values) {
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    const formData = new FormData();
    formData.append('values', values);
    fetch(`/${pyFunction}/`, {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken
        },
        body: formData
    });
}
;
function backEnd_request2(endpoint, values, callback) {
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    const formData = new FormData();
    formData.append('values', values);
    fetch(`/${endpoint}/`, {
        method: 'POST',
        headers: {
            "X-CSRFToken": csrfToken
        },
        body: formData
    })
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => {
        console.error('Error:', error);
        callback({ status: 'error' });
    });
}
function showPopup_index(message) {
    popup_bullshit.style.display = 'block';
    innerPopup_h5.innerHTML = message;
    setTimeout(function () {
        var autoDismissAlert = document.getElementById('index_editor_popup');
        if (autoDismissAlert) {
            autoDismissAlert.style.display = 'none';
        }
    }, 2000);
}
function delete_index_video(post_id, table) {
    let allTogether = `${post_id};${table}`;
    backEnd_request('index_editor_delete', allTogether);
    popup_bullshit.style.display = 'block';
    innerPopup_h5.innerHTML = 'Video Deleted...';
    setTimeout(function () {
        var autoDismissAlert = document.getElementById('index_editor_popup');
        if (autoDismissAlert) {
            autoDismissAlert.style.display = 'none';
        }
    }, 2000);
}
;
function bulk_delete_videos() {
    var mobileUserPanel = document.createElement("div");
    mobileUserPanel.className = "video_search_opener";
    mobileUserPanel.id = "video_search_openerID";
    let popup12Message = `
        <div class="mobile_video_search_opener">
            <div id="closeButtonThing">
                <button onclick="closeSearchVideo()"><i class="fa-solid fa-circle-xmark"></i></button>
            </div>
            <div class="video_search_opener">
                <div class="orientation_options">

                    <h1>Bulk Delete</h1>

                    <form id="searchVideoEditor_form">
                        <input name="search_video_editor" id="search_video_editor" placeholder="Title;Title..">
                        <button type="submit">Bulk Delete</button>
                    </form>


                    <div class="after_formed_submitted">
                        <h5>Videos Deleted..</h5>
                    </div>

                </div>
            </div>
        </div>
    `;
    mobileUserPanel.innerHTML = popup12Message;
    document.body.appendChild(mobileUserPanel);
    mobileUserPanel.style.display = "flex";
    mobileUserPanel.style.flexDirection = 'column';
    let searchVideoEditor_form = document.getElementById('searchVideoEditor_form');
    let vids_DEL_div = document.getElementById('after_formed_submitted');
    searchVideoEditor_form.addEventListener('submit', function (event) {
        event.preventDefault();
        let form_input = document.getElementById('search_video_editor');
        let formInputValue = form_input.value;
        backEnd_request('bulk_deleteVideos_editor', formInputValue);
        searchVideoEditor_form.style.display = 'none';
        vids_DEL_div.style.display = 'block';
    });
}
;
function closeSearchVideo() {
    let mobile_search_barID = document.getElementById('video_search_openerID');
    document.body.removeChild(mobile_search_barID);
    mobile_search_barID.style.display = 'none';
}
;
function showLoadingPopup() {
    var mobileUserPanel = document.createElement("div");
    mobileUserPanel.className = "video_search_opener";
    mobileUserPanel.id = "video_search_openerID";
    let popup12Message = `
        <div class="mobile_video_search_opener">
            <div id="closeButtonThing">
                <button onclick="closeSearchVideo()">
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>
            </div>

            <div class="loading_re_spinner-" id="loading_re_spinnerID" >

                <h5 id="html_h5_r">Loading Recommendations...</h5>

                <div class="loading_re_spinner" id="lolololol">

                </div>

                <div class="layout-recommendations" id="layout-recommendationsID">
                    <!-- This is where the content will be populated -->
                </div>

            </div>

            <div id="recommendationContent"></div>
        </div>
    `;
    mobileUserPanel.innerHTML = popup12Message;
    document.body.appendChild(mobileUserPanel);
    mobileUserPanel.style.display = "flex";
    mobileUserPanel.style.flexDirection = 'column';
}
function populateRecommendations(content) {
    let lajd = document.getElementById('lolololol');
    lajd.style.display = 'none';
    var recommendationsDiv = document.getElementById("layout-recommendationsID");
    recommendationsDiv.style.display = 'block';
    recommendationsDiv.innerHTML = content;
}
function loadRecommendations(co) {
    var content = `
        ${co.html}
    `;
    populateRecommendations(content);
}
function open_recommendations(title, orientation, abuse, rank, id) {
    let rValue = `${title};${orientation};${abuse};${rank};${id}`;
    console.log(rValue);
    showLoadingPopup();
    backEnd_request2('index_editor_re', rValue, (response) => {
        if (response.status === 'success') {
            const data = response.data;
            loadRecommendations(data);
        }
        else {
            showErrorPopup('Failed to get recommendations');
        }
        hideLoadingPopup();
    });
}
function showErrorPopup(errorMessage) {
}
function hideLoadingPopup() {
}
function add_one_video_to_thing(id) {
    var mobileUserPanel = document.createElement("div");
    mobileUserPanel.className = "add_New_video";
    mobileUserPanel.id = "add_New_videoID";
    let popup12Message = `
        <div class="mobile_add_New_video">
            <div id="closeButtonThing">
                <button onclick="closeVideoAdder()">
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>
                <button onclick="add_new_video_adder(${id})">
                    <i class="fa-solid fa-circle-plus"></i>
                </button>
            </div>

            <div class="box_open_thing">

                <select id="boxSelector_thing">
                    <option value="straight_abuse">Straight Abuse</option>
                    <option value="straight_banged">Straight Banged</option>
                    <option value="straight_teens">Straight Teens</option>
                    <option value="straight_amateur">Straight Amateur</option>
                    <option value="straight_wtf">Straight WTF</option>

                    <option value="gay_abuse">Gay Abuse</option>
                    <option value="gay_banged">Gay Banged</option>
                    <option value="gay_teens">Gay Teens</option>
                    <option value="gay_amateur">Gay Amateur</option>

                    <option value="lesbian_abuse">Lesbian Abuse</option>
                    <option value="lesbian_banged">Lesbian Banged</option>
                    <option value="lesbian_teens">Lesbian Teens</option>
                    <option value="lesbian_amateurs">Lesbian Amateur</option>

                    <option value="trans_abuse">Trans Abuse</option>
                    <option value="trans_banged">Trans Banged</option>
                    <option value="trans_teens">Trans Teens</option>
                    <option value="trans_amateurs">Trans Amateur</option>
                </select>

            </div>


        </div>
    `;
    mobileUserPanel.innerHTML = popup12Message;
    document.body.appendChild(mobileUserPanel);
    mobileUserPanel.style.display = "flex";
    mobileUserPanel.style.flexDirection = 'column';
}
function closeVideoAdder() {
    let close_DB1111 = document.getElementById('add_New_videoID');
    document.body.removeChild(close_DB1111);
    close_DB1111.style.display = 'none';
}
;
function add_new_video_adder(video_id3) {
    let getting_optionTHING = document.getElementById('boxSelector_thing');
    let kkkemsn = getting_optionTHING.value;
    let dd = `${video_id3};${kkkemsn}`;
    backEnd_request('addNew_video2Index', dd);
    let close_DB1111 = document.getElementById('add_New_videoID');
    document.body.removeChild(close_DB1111);
    close_DB1111.style.display = 'none';
}
;
function delete_one_index_video(video_ID1, adder0) {
    let values2send = `${video_ID1};${adder0}`;
    backEnd_request('del_only_one', values2send);
    showPopup_index('One Video Removed....');
}
;
function close_add_one_video_popup() {
    let close_DB1111 = document.getElementById('adding_oneVideoID');
    document.body.removeChild(close_DB1111);
    close_DB1111.style.display = 'none';
}
;
function add_one_video(adder1001) {
    var mobileUserPanel = document.createElement("div");
    mobileUserPanel.className = "adding_oneVideo";
    mobileUserPanel.id = "adding_oneVideoID";
    let popup12Message = `
        <div class="mobile_adding_oneVideo">

            <div id="closeButtonThing">
                <button onclick="close_add_one_video_popup()">
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>
            </div>



            <div class="form_section" >

                <form id="form4adding1video">
                    <label for="comment">Video Title:</label><br>
                    <textarea id="videoForm_title" name="videoForm_title" rows="4" cols="50" placeholder="Enter the video title here (only 1)"></textarea><br><br>

                    <input type="submit" value="Submit">
                </form>
            
            </div>

        </div>
    `;
    mobileUserPanel.innerHTML = popup12Message;
    document.body.appendChild(mobileUserPanel);
    mobileUserPanel.style.display = "flex";
    mobileUserPanel.style.flexDirection = 'column';
    let form4adding1video = document.getElementById('form4adding1video');
    form4adding1video.addEventListener('submit', function (event) {
        event.preventDefault();
        let video_title = document.getElementById('videoForm_title');
        let values2222 = video_title.value;
        let final_value = `${values2222};${adder1001}`;
        backEnd_request2('adding_one_video_2_index', final_value, (response) => {
            if (response.status === 'success') {
                const data = response.data;
                showPopup_index('Video added successfully..');
            }
            else {
                showPopup_index('Something went wrong.');
            }
        });
    });
}
function edit_index_video(post_id2, adder0) {
}
;
