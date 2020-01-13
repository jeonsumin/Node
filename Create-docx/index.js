const fs = require("fs");
const {
    Document,
    Packer,
    Paragraph,
    TextRun
} = require("docx");

// document 생성 
const doc = new Document();

//document 세션에 내용추가 (기본 텍스트만)
doc.addSection({
    properties: {},
    children: [
        new Paragraph({
            children: [
                new TextRun("Hello World"),
                new TextRun({
                    text: "Foo Bar",
                    bold: true,
                }),
                new TextRun({
                    text: "\tGithub is the best",
                    bold: true,
                }),
            ],
        }),
    ],
});
//.docx 파일 생성 
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});

// 해당폴더에 .docx 파일 생성 확인 할 수 있음 ..