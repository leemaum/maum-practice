var Links = {
    setColor: function (color) {
//        var alist = document.querySelectorAll('a');
//        var i = 0;
//        while (i < alist.length) {
//            alist[i].style.color = color;
//            i++;
//        }
        $('a').css('color', color);
    }
} 

var Body = {
    setBackgroundColor: function (color) {
//        document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    },
    setColor: function (color) {
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    }
}

function handler(self) {
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('skyblue');
        self.value = 'day';
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('blue');
        self.value = 'night';
    }
}