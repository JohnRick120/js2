"use strict";
let searchBox = document.getElementById('searchID');
let searchBoxContainer = document.getElementById('inputboxID');
let popup = document.getElementById("popup-element");
const messages_msg = document.getElementById('messagesID');
let searchForm = document.getElementById('searchFormID1');
let isHovering = false;
let stopLoading = true;
let is_authenticated1 = document.getElementById('is_authenticatedID');
let server_status4 = 'True';
let cleared_pages = [
    'terms',
    'notice',
    '2257',
    'dmcaTake',
    'dmca',
    'pp',
];
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
;
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
}
;
function updateCookie(cookieName, newValue) {
    var existingCookie = getCookie(cookieName);
    var updatedCookie = cookieName + "=" + newValue;
    document.cookie = updatedCookie;
}
function deleteCookie(cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function savingCookie() {
    let popup_container = document.getElementById('entryWarningID');
    popup_container.style.display = 'none';
    document.body.removeChild(popup_container);
    let username = getCookie("hasEntered");
    if (username != false) {
        console.log(username);
        doNothing();
    }
    else {
        setCookie("hasEntered", "True", 5);
    }
}
window.addEventListener('load', function () {
    let pageValue101 = document.getElementById('page-on');
    let pageValue102 = pageValue101.value;
    let cookies_starter = getCookie('orientation');
    if (cookies_starter) {
        doNothing();
    }
    else {
        deleteCookie('orientation');
        setCookie('orientation', 'straight', 10000);
    }
    ;
    if (is_authenticated1 == 'False') {
        doNothing();
    }
    else {
        let username = getCookie("hasEntered");
        if (username != false) {
            doNothing();
        }
        else {
            if (cleared_pages.includes(pageValue102)) {
                doNothing();
            }
            else {
                create_popup2('', 'Adult Only (18+)', 'This website contains adult content and is intended for individuals <b>(18)</b> or <b>(21)</b> years of age or older.', '#');
            }
        }
    }
});
function create_popup2(username, firstH1, secondH2, url) {
    var popup = document.createElement("div");
    popup.className = "entryWarning";
    popup.id = "entryWarningID";
    let notice_url = "";
    let termsOfUse = "";
    if (server_status4 === 'True') {
        let notice_url = "https://www.xodice.com/notice/";
        let termsOfUse = "https://www.xodice.com/terms-of-use/";
    }
    else {
        let notice_url = "http://127.0.0.1:8000/notice/";
        let termsOfUse = "http://127.0.0.1:8000/terms-of-use/";
    }
    let popupMessage = `
    <div class="popup-content">
        <h2>${firstH1}</h2>
        <p>${secondH2}</p>
        <p>This Website hosts <b>Hardcore Adult Content</b>: by entering you agree to accept our <a href="${termsOfUse}" class="linksBi">Terms of Use</a> & 
        <a href="${notice_url}"  class="linksBi" >Notice of Adult Content</a></p>
        <a onclick="savingCookie()"><button>Enter</button></a>
        <a href="javascript:void(0);" onclick="window.history.back();" ><button>Leave</button></a>

        <div class="button_bit">
            <small>This Website is soley restricted for adults</small>
            <img src="/static/images/rta-logo2.png" alt="restricted to adults logo" style="margin-right: 5px;">
        </div>
    </div>
    `;
    popup.innerHTML = popupMessage;
    document.body.appendChild(popup);
    popup.style.display = "flex";
    popup.style.flexDirection = 'column';
}
;
function doNothing() {
}
function closeEntryWarning(choice) {
    let entry_container = document.getElementById('entryWarningID');
    if (choice == 'enter') {
        entry_container.style.display = 'none';
    }
    else {
        window.history.back();
    }
}
function getUrls() {
    let urls = {};
    if (server_status4 === 'True') {
        urls.video_url = 'https://www.xodice.com/users/uploads/';
        urls.likes_url = 'https://www.xodice.com/users/likes/';
        urls.premium = 'https://www.xodice.com/premium/';
        urls.pp_page = 'https://www.xodice.com/privacy_policy/';
        urls.tos = 'https://www.xodice.com/terms-of-use/';
        urls.notice = 'https://www.xodice.com/notice/';
        urls.contact = 'https://www.xodice.com/contact_us/';
        urls.userhome = 'https://www.xodice.com/users/dashboard/';
        urls.upload = 'https://www.xodice.com/users/submission/';
        urls.logout = 'https://www.xodice.com/users/logout_user';
        urls.login = 'https://www.xodice.com/users/loginUser/';
        urls.join = 'https://www.xodice.com/users/join/';
    }
    else {
        urls.video_url = 'http://127.0.0.1:8000/users/uploads/';
        urls.likes_url = 'http://127.0.0.1:8000/users/likes/';
        urls.premium = 'http://127.0.0.1:8000/premium/';
        urls.pp_page = 'http://127.0.0.1:8000/privacy_policy/';
        urls.tos = 'http://127.0.0.1:8000/terms-of-use/';
        urls.notice = 'http://127.0.0.1:8000/notice/';
        urls.contact = 'http://127.0.0.1:8000/contact_us/';
        urls.userhome = 'http://127.0.0.1:8000/users/dashboard/';
        urls.upload = 'http://127.0.0.1:8000/users/submission/';
        urls.logout = 'http://127.0.0.1:8000/users/logout_user';
        urls.login = 'http://127.0.0.1:8000/users/loginUser/';
        urls.join = "http://127.0.0.1:8000/users/join/";
    }
    return urls;
}
;
let main_input = '';
function open_dropwdown() {
    console.log('open_dropdown function');
    isHovering = true;
    popup.style.display = "block";
    popup.style.display = "flex";
    popup.style.flexDirection = "column";
    let input = document.getElementById('searchID');
    let inputValue = input.value;
    makeAjexRequest(inputValue);
}
;
function makeAjexRequest(input) {
    let data = input.toString();
    let newData = [];
}
;
function addElementsToDOM(data, input) {
    var container = document.getElementById("popup-element");
    let numberOfPosts = data[0].toString();
    let tags = data[1];
    let things = document.getElementById('yourLinkId');
    if (input) {
        doNothing();
    }
    else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    main_input = input;
    if (things) {
        if (input) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            for (let value of tags) {
                var link1 = document.createElement("a");
                var url = "";
                if (server_status4 === 'True') {
                    url = "http://www.xodice.com/search/" + encodeURIComponent(value);
                }
                else {
                    url = "http://127.0.0.1:8000/search/" + encodeURIComponent(value);
                }
                link1.href = url;
                link1.textContent = value;
                link1.id = "yourLinkId";
                container.appendChild(link1);
            }
            var hr1 = document.createElement("hr");
            var small1 = document.createElement("small");
            small1.textContent = numberOfPosts;
            container.appendChild(small1);
            container.appendChild(hr1);
        }
        else {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        }
    }
    else {
        if (input) {
            for (let value of tags) {
                var link1 = document.createElement("a");
                var url = "";
                if (server_status4 === 'True') {
                    url = "http://www.xodice.com/search/" + encodeURIComponent(value);
                }
                else {
                    url = "http://127.0.0.1:8000/search/" + encodeURIComponent(value);
                }
                link1.href = url;
                link1.textContent = value;
                link1.id = "yourLinkId";
                container.appendChild(link1);
            }
            var hr1 = document.createElement("hr");
            var small1 = document.createElement("small");
            small1.textContent = numberOfPosts;
            container.appendChild(small1);
            container.appendChild(hr1);
        }
        else {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        }
    }
}
;
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let stupid_value = document.getElementById('searchID');
    let stupid_value_value = stupid_value.value;
    let url = '';
    if (server_status4 === 'True') {
        url = `https://www.xodice.com/search/${stupid_value_value}`;
    }
    else {
        url = `http://127.0.0.1:8000/search/${stupid_value_value}`;
    }
    window.location.href = url;
    let yes = getCookie('searchValue');
    if (yes != '') {
        let added_ = `${yes};${stupid_value_value}`;
        updateCookie('searchValue', added_);
    }
    else {
        setCookie('searchValue', stupid_value_value, 1);
    }
});
function keep_open() {
    isHovering = true;
    popup.style.display = "block";
    popup.style.display = "flex";
    popup.style.flexDirection = "column";
}
function hidePopup() {
    if (isHovering == false) {
        popup.style.display = "none";
    }
}
popup.addEventListener("mouseover", function () {
    keep_open();
});
popup.addEventListener("mouseout", function () {
    isHovering = false;
    hidePopup();
});
function open_search() {
    searchBox.style.display = 'block';
    searchBoxContainer.style.display = 'block';
}
;
let overly = document.getElementById('overlyID');
overly.addEventListener('mouseover', function () {
    popup.style.display = 'none';
});
function show_message(message) {
    messages_msg.style.display = 'block';
    messages_msg.innerHTML = `<div style="
    color: white; 
    font-size: 18px; 
    padding: 10px; 
    font-family:Arial, Helvetica, sans-serif;
    ">${message}</div>`;
    setTimeout(function () {
        messages_msg.style.display = 'none';
    }, 3000);
}
;
setTimeout(function () {
    var autoDismissAlert = document.getElementById('autoDismissAlert');
    if (autoDismissAlert) {
        autoDismissAlert.remove();
    }
}, 3000);
let is_popup = false;
let authenticatedElement = document.getElementById('is_authenticatedID');
let authenticated = authenticatedElement.value;
function openMobilePopup() {
    var popup = document.createElement("div");
    popup.className = "popup2";
    popup.id = "myPopup";
    let posts_dev = '';
    let joins = '';
    let dashboard = '';
    let submission = '';
    let premium = '';
    if (server_status4 === 'True') {
        posts_dev = 'https://www.xodice.com/posts';
        joins = 'https://www.xodice.com/users/join/';
        dashboard = 'https://www.xodice.com/users/dashboard/';
        submission = 'https://www.xodice.com/submission/';
        premium = 'https://www.xodice.com/premium/';
    }
    else {
        posts_dev = 'http://127.0.0.1:8000/posts';
        joins = 'http://127.0.0.1:8000/users/join/';
        dashboard = 'http://127.0.0.1:8000/users/dashboard/';
        submission = 'http://127.0.0.1:8000/submission/';
        premium = 'http://127.0.0.1:8000/premium/';
    }
    let popupMessage = '';
    if (authenticated == "False") {
        popupMessage = `
            <h2></h2>
            <a href="${posts_dev}">Posts</a>
            <a href="${joins}">Join</a>
            <a href="${submission}">Submit</a>
            <a href="${premium}" id="popupPremium" >Premium</a>
            <a href="${dashboard}">Account</a>
        `;
    }
    else {
        let logout = "/users/logout_user/";
        popupMessage = `
        <h2></h2>
            <a href="${posts_dev}">Posts</a>
            <a href="${submission}">Submit</a>
            <a href="${premium}" id="popupPremium" >Premium</a>
            <a href="${dashboard}">Account</a>
            <a href="${logout}">Log Out</a>
            
        `;
    }
    popup.innerHTML = popupMessage;
    document.body.appendChild(popup);
    popup.style.display = "flex";
    popup.style.flexDirection = 'column';
}
function closePopup2() {
    let popup = document.getElementById('myPopup');
    popup.style.display = 'none';
    document.body.removeChild(popup);
}
function mobileHamburger() {
    if (!is_popup) {
        openMobilePopup();
        is_popup = true;
    }
    else {
        closePopup2();
        is_popup = false;
    }
}
let nameOfSite = document.getElementById('nameOfSite');
let nameOfSiteValue = nameOfSite.value;
let tagsData = [];
function yesSIr(data) {
    tagsData.push(data);
}
function close_menuTags() {
    let menuTags = document.getElementById('mobileMenuDropdownTAGSOID');
    menuTags.style.display = 'none';
}
let isTagsMobile_open = false;
function showMenuTags() {
    if (isTagsMobile_open === false) {
        close_menuTags();
        isTagsMobile_open = true;
    }
    else {
        let menuTags = document.getElementById('mobileMenuDropdownTAGSOID');
        menuTags.style.display = 'block';
        let newStuff = `
            ${tagsData[0]}
        `;
        menuTags.innerHTML = newStuff;
        isTagsMobile_open = false;
    }
}
;
function open_mobile_menu1() {
    var popup12 = document.createElement("div");
    popup12.className = "mobile_menu111";
    popup12.id = "mobile_menu111ID";
    let uu = getUrls();
    console.log(uu.video_url);
    let popup12Message = `
    <div class="nav_bar">
        <p>${nameOfSiteValue}</p>
        <i class="fa-solid fa-xmark" onclick="closeMobileMenu101()"></i>
    </div>
    

    <div class="clickable_things">
        <a href="${uu.video_url}" ><div><i class="fa-solid fa-video"></i> Videos </div></a>
        <a href="${uu.likes_url}" ><div><i class="fa-solid fa-thumbs-up"></i> Likes </div></a>
        <a href="#" ><div><i class="fa-brands fa-discord"></i> Join Us</div></a>
        <a href="${uu.premium}" id="PremiumID" >Wait list for Premium</a>
    </div>


    <div class="otherOptions">

        <a href="${uu.pp_page}"><i class="fa-solid fa-shield-halved"></i>Privacy Policy</a>

        <a href="${uu.tos}"><i class="fa-solid fa-book"></i>Terms of Use</a>

        <a href="${uu.contact}"><i class="fa-regular fa-paper-plane"></i>Contact Us</a>

        <a href="${uu.notice}"><i class="fa-solid fa-circle-exclamation"></i>NOTICE</a>

    </div>
    `;
    popup12.innerHTML = popup12Message;
    document.body.appendChild(popup12);
    popup12.style.display = "flex";
    popup12.style.flexDirection = 'column';
    isTagsMobile_open = true;
}
;
function closeMobileMenu101() {
    let popup = document.getElementById('mobile_menu111ID');
    popup.style.display = 'none';
    document.body.removeChild(popup);
}
;
function open_mobileMenu() {
    open_mobile_menu1();
}
;
let is_dorpDown_Open = false;
function openFooterOption(buttonNum) {
    let nameIus = `dropeurID${buttonNum}`;
    let dropDown_thingyyy = document.getElementById(nameIus);
    if (!is_dorpDown_Open) {
        dropDown_thingyyy.style.display = 'flex';
        dropDown_thingyyy.style.flexDirection = 'column';
        is_dorpDown_Open = true;
    }
    else {
        dropDown_thingyyy.style.display = 'none';
        is_dorpDown_Open = false;
    }
}
;
function searchInputUpdate() {
    let mobileSearchBarID = document.getElementById('mobileSearchBarID');
    let searchValue = mobileSearchBarID.value;
}
function close_mobileSearchBar() {
    let mobile_search_barID = document.getElementById('mobile_search_barID');
    mobile_search_barID.style.display = 'none';
    document.body.removeChild(mobile_search_barID);
}
;
function open_mobileSearch() {
    var mobileSeachBar = document.createElement("div");
    mobileSeachBar.className = "mobile_search_bar";
    mobileSeachBar.id = "mobile_search_barID";
    let csrf__token = document.getElementById('csrfTok');
    let csrf__tokenV = csrf__token.value;
    let popup12Message = `

        <div class="mobile_searchBar">

            <form action="/search_results/" method="POST">
                <input type="hidden" name="csrfmiddlewaretoken" value="${csrf__tokenV}">
                <input type="search" name="mobileSearchBar" id="mobileSearchBarID"  oninput="searchInputUpdate()" placeholder="Search. ">
            </form>

            <div> 
                <button type="button" onclick="close_mobileSearchBar()" >Cancel</button>
            </div>
        
        </div>

    `;
    mobileSeachBar.innerHTML = popup12Message;
    document.body.appendChild(mobileSeachBar);
    mobileSeachBar.style.display = "flex";
    mobileSeachBar.style.flexDirection = 'column';
}
;
function close_mobileUser() {
    let mobile_search_barID = document.getElementById('mobile_userSettingID');
    document.body.removeChild(mobile_search_barID);
    mobile_search_barID.style.display = 'none';
}
;
function cap_ori(ort) {
    let theCookie = ort.toString();
    theCookie = theCookie.charAt(0).toUpperCase() + theCookie.slice(1);
    return theCookie;
}
let orientation_icons1 = {
    "Straight": "fa-venus-mars",
    "Gay": 'fa-mars-double',
    "Lesbian": 'fa-venus-double',
    "Trans": 'fa-transgender'
};
function open_mobileUser() {
    var mobileUserPanel = document.createElement("div");
    mobileUserPanel.className = "mobile_userSetting";
    mobileUserPanel.id = "mobile_userSettingID";
    let theCookie = getCookie('orientation');
    let sexual_orientation = cap_ori(theCookie);
    let icon_thing = orientation_icons1[sexual_orientation];
    let urls_things = getUrls();
    let html_thing = '';
    if (is_authenticated1.value == 'True') {
        html_thing = `
            <div class="login_section">
                <a href="${urls_things.userhome}">
                    <i class="fa-solid fa-house-user"></i>
                    Home
                </a>
                <a href="${urls_things.upload}">
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                    Upload
                </a>
                <a href="${urls_things.logout}">
                    <i class="fa-solid fa-sign-out-alt"></i>
                    Logout
                </a>
            </div>
            `;
    }
    else {
        html_thing = `
        <div class="login_section">
            <a href="${urls_things.join}">
                <i class="fa-solid fa-user-plus"></i>
                Join Now
            </a>
            <a href="${urls_things.login}" >
                <i class="fa-solid fa-right-to-bracket"></i>
                Login
            </a>
            <a href="${urls_things.upload}" >
                <i class="fa-solid fa-cloud-arrow-up"></i>
                Upload
            </a>
        </div>
        `;
    }
    let popup12Message = `
        <div class="section1" onclick="close_mobileUser()">
            <i class="fa-solid fa-xmark" id="lol222" ></i>
        </div>

        <div class="section2">


        ${html_thing}


        <div class="later_section">
            <a>
               <i class="fa-solid fa-star"></i>
                X Videos
            </a>
        </div>


        <div class="later_section">
            <a>
                <i class="fa-solid fa-list"></i>
                Categories
            </a>
        </div>

        <div class="later_section">
            <a>
                <i class="fa-solid fa-chart-simple"></i>
                Channels
            </a>
        </div>

        <div class="later_section">
            <a href="${urls_things.premium}">
                <i class="fa-solid fa-heart"></i>
                Premium
            </a>
        </div>



        <div class="later_section">
            <a onclick="open_orientation_chooser()">
                <i class="fa-solid ${icon_thing}"></i>
                ${sexual_orientation}
            </a>
        </div>

    

    </div>



    `;
    mobileUserPanel.innerHTML = popup12Message;
    document.body.appendChild(mobileUserPanel);
    mobileUserPanel.style.display = "flex";
    mobileUserPanel.style.flexDirection = 'column';
}
;
function change_orientation(orientation) {
    let theCookie = getCookie('orientation');
    if (theCookie != '') {
        deleteCookie('orientation');
        setCookie('orientation', orientation, 10000);
    }
    else {
        setCookie('orientation', orientation, 10000);
    }
}
;
function close_orientation_chooser() {
    let mobile_search_barID = document.getElementById('orientation_chooserID');
    document.body.removeChild(mobile_search_barID);
    mobile_search_barID.style.display = 'none';
}
function open_orientation_chooser() {
    close_mobileUser();
    var mobileUserPanel = document.createElement("div");
    mobileUserPanel.className = "orientation_chooser";
    mobileUserPanel.id = "orientation_chooserID";
    let popup12Message = `

        <div class="mobile_orientation_chooser">
            
            <div class="orientation_chooser">

                <div class="orientation_options">
                    <div class="selections">
                        <a onclick="changing_straight_orientation()" id="straight_o_id" >Straight <i class="fa-solid fa-venus-mars"></i></a>

                        <a onclick="changing_gay_orientation()" id="gay_o_id">Gay <i class="fa-solid fa-mars-double"></i></a>

                        <a onclick="changing_lesbo_orientation()" id="lesbian_o_id">Lesbian <i class="fa-solid fa-venus-double"></i></a>

                        <a onclick="changing_trans_orientation()" id="trans_o_id">Trans <i class="fa-solid fa-transgender"></i></a>
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
function changing_straight_orientation() {
    changeOrientation('straight', 'straight_o_id');
}
function changing_gay_orientation() {
    changeOrientation('gay', 'gay_o_id');
}
function changeOrientation(orientation, elementId) {
    let orientationElement = document.getElementById(elementId);
    if (orientationElement) {
        orientationElement.style.backgroundColor = '#333';
        orientationElement.style.color = 'white';
        orientationElement.style.border = '1px solid white';
        close_orientation_chooser();
        let currentCookie = getCookie('orientation');
        if (currentCookie != '') {
            deleteCookie('orientation');
        }
        setCookie('orientation', orientation, 10000);
        window.location.reload();
    }
}
function changing_lesbo_orientation() {
    changeOrientation('lesbian', 'lesbian_o_id');
}
;
function changing_trans_orientation() {
    changeOrientation('trans', 'trans_o_id');
}
;
function makeBackendRequest(pyFunction, values) {
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
function getting_premium_email() {
    let email_premium = document.getElementById('email_premium');
    let email_premium2 = email_premium.value;
    makeBackendRequest('my_view', email_premium2);
    let first_element = document.getElementById('first_element');
    let second_element = document.getElementById('second_element');
    first_element.style.display = 'none';
    second_element.style.display = 'block';
}
