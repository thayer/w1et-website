// Created by iWeb 3.0.4 local-build-20120726

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,272),url:'Home_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Home_files/stroke_1.png'},{rect:new IWRect(5,-5,406,10),url:'Home_files/stroke_2.png'},{rect:new IWRect(411,-5,10,10),url:'Home_files/stroke_3.png'},{rect:new IWRect(411,5,10,272),url:'Home_files/stroke_4.png'},{rect:new IWRect(411,277,10,10),url:'Home_files/stroke_5.png'},{rect:new IWRect(5,277,406,10),url:'Home_files/stroke_6.png'},{rect:new IWRect(-5,277,10,10),url:'Home_files/stroke_7.png'}],new IWSize(416,282))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
