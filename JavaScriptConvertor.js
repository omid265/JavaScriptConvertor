
var Convert = {
    Objects: {
        ToQueryString: function (v) {
            return Object.keys(v).map(function (k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(v[k])
            }).join('&')
        },
    },
    Numbert: {
        parseArabic: function (str) {
            return Number(str.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
                return d.charCodeAt(0) - 1632; // Convert Arabic numbers
            }).replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
                return d.charCodeAt(0) - 1776; // Convert Persian numbers
            }));
        },
        ToENNumber(pNumber) {
            var _self = this;
            var mySeperatedDate = (pNumber).split('/')

            var result = "";
            $.each(mySeperatedDate, function (i, v) {
                v = _self.parseArabic(v);
                result += (v < 10 ? ("" + 0 + v) : v) + "/";
            })
            result = result.slice(0, -1)
            return result;
        }
    }
}
