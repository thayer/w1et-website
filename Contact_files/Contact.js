// Created by iWeb 3.0.4 local-build-20130112

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,270),url:'Contact_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Contact_files/stroke_1.png'},{rect:new IWRect(5,-5,390,10),url:'Contact_files/stroke_2.png'},{rect:new IWRect(395,-5,10,10),url:'Contact_files/stroke_3.png'},{rect:new IWRect(395,5,10,270),url:'Contact_files/stroke_4.png'},{rect:new IWRect(395,275,10,10),url:'Contact_files/stroke_5.png'},{rect:new IWRect(5,275,390,10),url:'Contact_files/stroke_6.png'},{rect:new IWRect(-5,275,10,10),url:'Contact_files/stroke_7.png'}],new IWSize(400,280))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Contact_files/ContactMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
