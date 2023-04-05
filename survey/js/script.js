console.log('test');

// Save selected values for sections on this page to local storage
window.addEventListener('beforeunload', function() {
    var pageId = 'page1';
    var sections = ['lesstof1', 'geleerd1'];
    sections.forEach(function(section) {
        var selectedValue = document.querySelector('input[name="' + section + '"]:checked').value;
        localStorage.setItem(pageId + '_' + section, selectedValue);
    });
});

// Load selected values for sections on this page from local storage
window.addEventListener('load', function() {
    var pageId = 'page1';
    var sections = ['lesstof1', 'geleerd1'];
    sections.forEach(function(section) {
        var selectedValue = localStorage.getItem(pageId + '_' + section);
        if (selectedValue) {
            document.querySelector('input[name="' + section + '"][value="' + selectedValue + '"]').checked = true;
        }
    });
});

// Save selected values for sections on this page to local storage
window.addEventListener('beforeunload', function() {
    var pageId = 'page2';
    var sections = ['lesstof2', 'geleerd2'];
    sections.forEach(function(section) {
        var selectedValue = document.querySelector('input[name="' + section + '"]:checked').value;
        localStorage.setItem(pageId + '_' + section, selectedValue);
    });
});

// Load selected values for sections on this page from local storage
window.addEventListener('load', function() {
    var pageId = 'page2';
    var sections = ['lesstof2', 'geleerd2'];
    sections.forEach(function(section) {
        var selectedValue = localStorage.getItem(pageId + '_' + section);
        if (selectedValue) {
            document.querySelector('input[name="' + section + '"][value="' + selectedValue + '"]').checked = true;
        }
    });
});

// Save selected values for sections on this page to local storage
window.addEventListener('beforeunload', function() {
    var pageId = 'page3';
    var sections = ['lesstof3', 'geleerd3'];
    sections.forEach(function(section) {
        var selectedValue = document.querySelector('input[name="' + section + '"]:checked').value;
        localStorage.setItem(pageId + '_' + section, selectedValue);
    });
});

// Load selected values for sections on this page from local storage
window.addEventListener('load', function() {
    var pageId = 'page3';
    var sections = ['lesstof3', 'geleerd3'];
    sections.forEach(function(section) {
        var selectedValue = localStorage.getItem(pageId + '_' + section);
        if (selectedValue) {
            document.querySelector('input[name="' + section + '"][value="' + selectedValue + '"]').checked = true;
        }
    });
});

// Save selected values for sections on this page to local storage
window.addEventListener('beforeunload', function() {
    var pageId = 'page4';
    var sections = ['lesstof4', 'geleerd4'];
    sections.forEach(function(section) {
        var selectedValue = document.querySelector('input[name="' + section + '"]:checked').value;
        localStorage.setItem(pageId + '_' + section, selectedValue);
    });
});

// Load selected values for sections on this page from local storage
window.addEventListener('load', function() {
    var pageId = 'page4';
    var sections = ['lesstof4', 'geleerd4'];
    sections.forEach(function(section) {
        var selectedValue = localStorage.getItem(pageId + '_' + section);
        if (selectedValue) {
            document.querySelector('input[name="' + section + '"][value="' + selectedValue + '"]').checked = true;
        }
    });
});

// Save selected values for sections on this page to local storage
window.addEventListener('beforeunload', function() {
    var pageId = 'page5';
    var sections = ['lesstof5', 'geleerd5'];
    sections.forEach(function(section) {
        var selectedValue = document.querySelector('input[name="' + section + '"]:checked').value;
        localStorage.setItem(pageId + '_' + section, selectedValue);
    });
});

// Load selected values for sections on this page from local storage
window.addEventListener('load', function() {
    var pageId = 'page5';
    var sections = ['lesstof5', 'geleerd5'];
    sections.forEach(function(section) {
        var selectedValue = localStorage.getItem(pageId + '_' + section);
        if (selectedValue) {
            document.querySelector('input[name="' + section + '"][value="' + selectedValue + '"]').checked = true;
        }
    });
});

// Save selected values for sections on this page to local storage
window.addEventListener('beforeunload', function() {
    var pageId = 'page6';
    var sections = ['lesstof6', 'geleerd6'];
    sections.forEach(function(section) {
        var selectedValue = document.querySelector('input[name="' + section + '"]:checked').value;
        localStorage.setItem(pageId + '_' + section, selectedValue);
    });
});

// Load selected values for sections on this page from local storage
window.addEventListener('load', function() {
    var pageId = 'page6';
    var sections = ['lesstof6', 'geleerd6'];
    sections.forEach(function(section) {
        var selectedValue = localStorage.getItem(pageId + '_' + section);
        if (selectedValue) {
            document.querySelector('input[name="' + section + '"][value="' + selectedValue + '"]').checked = true;
        }
    });
});

