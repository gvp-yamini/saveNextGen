function initializetmpSegImagesKA() {
    flxImagesKA = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "220dp",
        "id": "flxImagesKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxBackgroundKA"
    }, {}, {});
    flxImagesKA.setDefaultUnit(kony.flex.DP);
    var ImgEventsKA = new kony.ui.Image2({
        "height": "100%",
        "id": "ImgEventsKA",
        "isVisible": true,
        "left": "0dp",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxImagesKA.add(
    ImgEventsKA);
}