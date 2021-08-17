var app = new Vue({
    el: '#app',
    data() {
        return {
            buttonText: "custom button",
            disabled: false,
            color: "black",
            backgroundColor: "white",
            borderRadius: "50",
            opacity: "1.0",
            fontSize: "30",
        };
    },
    computed: {
        styleObject() {
            return {
                color: this.color,
                backgroundColor: this.backgroundColor,
                borderRadius: this.borderRadius + "%",
                opacity: this.opacity,
                fontSize: this.fontSize + "px",
            };
        },
    },
})