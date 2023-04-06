'use strict';

const viewportSmall = 375;
const viewportMedium = 768;
const viewportLarge = 1440;
const viewportMin = 375;
const viewportMax = 1920;

const viewportDiffSmall = viewportMedium - viewportSmall;
const viewportDiffBig = viewportLarge - viewportMedium;
const viewportDiffFull = viewportLarge - viewportSmall;

const multiplierSmall = "((var(--viewport) - " + viewportSmall + ")/" + viewportDiffSmall + ")";
const multiplierSmallMax = (viewportMax - viewportSmall)/viewportDiffSmall;
const multiplierSmallMin = (viewportMin - viewportSmall)/viewportDiffSmall;

const multiplierBig = "((var(--viewport) - " + viewportMedium + ")/" + viewportDiffBig +")";
const multiplierBigMax = (viewportMax - viewportMedium)/viewportDiffBig;
const multiplierBigMin = (viewportMin - viewportMedium)/viewportDiffBig;

const multiplierFull = "((var(--viewport) - " + viewportSmall + ")/" + viewportDiffFull + ")";
const multiplierFullMax = (viewportMax - viewportSmall)/viewportDiffFull;
const multiplierFullMin = (viewportMin - viewportSmall)/viewportDiffFull;

function updateViewportWidth() {
  document.documentElement.style.setProperty('--viewport', window.innerWidth);
}

const fluid = {

  init: function () {
    updateViewportWidth();
    window.addEventListener('resize', updateViewportWidth);
  },

  calc: function (small_num = 0, big_num = 0, type = 'Full', unit = '') {

    let str = small_num + unit + " + " + (big_num - small_num) + unit + " * ";

    if (small_num > big_num) {
      switch (type) {
        case 'b':
          return (
            "clamp( " +
              str + multiplierBigMax + ", " +
              str + multiplierBig + ", " +
              str + multiplierBigMin +
            ")"
          );
        case 's':
          return (
            "clamp( " +
              str + multiplierSmallMax + ", " +
              str + multiplierSmall + ", " +
              str + multiplierSmallMin +
            ")"
          );
        default:
          return (
            "clamp( " +
              str + multiplierFullMax + ", " +
              str + multiplierFull + ", " +
              str + multiplierFullMin +
            ")"
          );
      }
    }

    switch (type) {
      case 'b':
        return (
          "clamp( " +
            str + multiplierBigMin + ", " +
            str + multiplierBig + ", " +
            str + multiplierBigMax +
          ")"
        );
      case 's':
        return (
          "clamp( " +
            str + multiplierSmallMin + ", " +
            str + multiplierSmall + ", " +
            str + multiplierSmallMax +
          ")"
        );
      default:
        return (
          "clamp( " +
            str + multiplierFullMin + ", " +
            str + multiplierFull + ", " +
            str + multiplierFullMax +
          ")"
        );
    }
  },

  container: function container(fluidContainerPaddingSmall = 24, fluidContainerPaddingLarge = 165, fluidContainerPaddingMin = 24) {
    const maxContainerWidth = (viewportMax - ((fluidContainerPaddingSmall + (fluidContainerPaddingLarge - fluidContainerPaddingSmall) * multiplierFullMax) * 2));
    const max = "(var(--viewport) - " + maxContainerWidth + ") * 0.5px";
    const value = "(" + fluidContainerPaddingSmall + " + (" + (fluidContainerPaddingLarge - fluidContainerPaddingSmall) + " * " + multiplierFull + ")) * 1px";
    const min = fluidContainerPaddingMin + " * 1px";
    return (
      "0 max(" + max + ", " + value + ", " + min + ")"
    );
  }
}

export default fluid;