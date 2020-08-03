// create new document/file
if(!app.homeScreenVisible) {
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }


    // main code
    var myDocument = app.documents.add();
    myDocument.layers[0].name = "Background Layer";

    // create solid coloured bg
    generateBackground();

    // create a layer for a triangle with just stroke
    var layerTwo = myDocument.layers.add();
    layerTwo.name = "Triangle Layer";
    generateTriangle();

    // create a new layer for the text
    var layerThree = myDocument.layers.add();
    layerThree.name = "Text Layer";
    generateText("COMPANY_NAME");

    // save out png file of automated creation
    myDocument.exportFile(File("~/Documents/test.png"), ExportType.PNG24);
    

function generateBackground() {
        var doc = app.activeDocument;
        var background = doc.pathItems.add();
        background.filled = true;
        var bgFillColour = new CMYKColor();
        bgFillColour.cyan = 4;
        bgFillColour.magenta = 2;
        bgFillColour.yellow = 97;
        bgFillColour.black = 1;
        background.fillColor = bgFillColour;
        background.setEntirePath([[0, 0], [doc.width, 0], [doc.width, doc.height], [0, doc.height]]);
    }

function generateText(text) {
        var doc = app.activeDocument;
        var textFrame = doc.textFrames.add();
        textFrame.name = "Test Text Frame";
        // .contents to change text
        textFrame.contents = text;
        var textRange = textFrame.textRange;
        textRange.size = 36;
        textRange.justification = Justification.CENTER;
        textFrame.position = [doc.width*.5-textFrame.width*.5, doc.height*.5+textFrame.width*.5];
    }

function generateTriangle() {
        var doc = app.activeDocument;
        var triangle = doc.pathItems.add();
        triangle.stroked = true;
        triangle.setEntirePath([[doc.width/2, 25], [25, doc.height-25], [doc.width-25, doc.height-25], [doc.width/2, 25]]);
    }