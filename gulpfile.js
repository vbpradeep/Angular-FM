require("@syncfusion/ej2-build");
var shelljs = require('shelljs');
const dotenv = require("dotenv");
var email = require('emailjs/email');
var zipFolder = require('zip-folder');
var fs = require('fs');
var tableify = require('tableify');
var testReport_file_name = new Date().toLocaleString().split(',')[0].split(' ')[0];
var overAllConfig = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
var mailConfig = overAllConfig.mail_config;


var devlopment = "registry=https://registry.npmjs.org/" + "\n" + "@syncfusion:registry=http://nexus.syncfusion.com/repository/ej2/";
var production = "registry=https://registry.npmjs.org/" + "\n" + "@syncfusion:registry=http://nexus.syncfusion.com/repository/ej2-production/";
var release = "registry=https://registry.npmjs.org/" + "\n" + "@syncfusion:registry=http://nexus.syncfusion.com/repository/ej2-release/";
var npmjs = "registry=https://registry.npmjs.org/";

gulp.task('development-mode', function (done) {
    fs.writeFileSync('.npmrc', devlopment);   
    fs.writeFileSync('.env', "running_Mode=Development");    
});

gulp.task('Production-mode', function (done) {
    fs.writeFileSync('.npmrc', production);  
    fs.writeFileSync('.env', "running_Mode=Production");    
});

gulp.task('npmjs-mode', function (done) {
    fs.writeFileSync('.npmrc', npmjs);    
    fs.writeFileSync('.env', "running_Mode=npmjs");
});

gulp.task('release-mode', function (done) {
    fs.writeFileSync('.npmrc', release); 
    fs.writeFileSync('.env', "running_Mode=Release");   
});

gulp.task('test-report', function (done) {
    var overAllReport = JSON.parse(fs.readFileSync('./output/config.json'));
    fs.readdir("./e2e/diff/chrome", (err, files) => { overAllReport['Consolidate Report']['Difference Image Count'][0]['Chrome'] = (files.length - 1) });
    fs.readdir("./e2e/diff/firefox", (err, files) => { overAllReport['Consolidate Report']['Difference Image Count'][0].FireFox = (files.length - 1) });
    fs.readdir("./e2e/diff/internetexplorer", (err, files) => { overAllReport['Consolidate Report']['Difference Image Count'][0]['Internet Explorer'] = (files.length - 1) });
    fs.readdir("./e2e/diff/MicrosoftEdge", (err, files) => { overAllReport['Consolidate Report']['Difference Image Count'][0]['Microsoft Edge'] = (files.length - 1) });
    setTimeout(function () {
        fs.writeFileSync('./output/config.json', JSON.stringify(overAllReport));
        generateReport();
        console.log('Test-Report-Generated');
    }, 3000);

});

gulp.task('copy-file-report', function (done) {
    const { parsed } = dotenv.config();
    var sourcefolder = process.cwd() + '\\e2e\\diff';
    var destinationfolder = process.cwd() + '\\test-reports\\' + testReport_file_name + "_" + parsed.running_Mode + "_diff";
    console.log(' xcopy /e /v ' + sourcefolder + ' ' + destinationfolder + '')
    shelljs.exec('rmdir /S /Q "test-reports/' + testReport_file_name + "_" + parsed.running_Mode + '_diff"');
    shelljs.exec(' xcopy /e /v /EXCLUDE:excludecssfilelist.txt ' + sourcefolder + ' ' + destinationfolder + '\\');
    shelljs.exec('del.bat');
});

function generateReport() {
    const { parsed } = dotenv.config();
    var overAllReport = JSON.parse(fs.readFileSync('./output/config.json'));
	overAllReport['Consolidate Report']['ej2-angular-navigations'] = shelljs.exec('npm view @syncfusion/ej2-angular-navigations version')['stdout']
    var html = tableify(overAllReport);
    html = html.replace(/class="string"><div class="passed"/g, 'class="string success"><div class="passed"');
    html = html.replace(/class="string"><div class="failed"/g, 'class="string failed"><div class="failed"');
    var reportHTML = '<html><style>table, th, td {border: 1px solid black;border-collapse: collapse;}' +
        'th, td {padding: 10px;} td.string.failed { background-color: red } td.string.success { background-color: green }</style><h2>Hi Everyone,</h2></br><h3>' + mailConfig.title +
        ' againt '+parsed.running_Mode + '</h3> </br></br><div id="report">' + html + '</div></br></br></br>';
    shelljs.exec('mkdir test-reports');
    fs.writeFileSync('./test-reports/ ' + testReport_file_name + "_" + parsed.running_Mode + ".html", reportHTML);
    return reportHTML;
}

function removeGenFiles() {
    shelljs.exec('del /q output\*');
    shelljs.exec('for /d %x in (output\*) do @rd /s /q "%x"');
    // fs.unlinkSync('output.zip');
    // shelljs.exec('for /f %F in ("e2e/diff/chrome /b /a-d ^| findstr /vile ".gitkeep"") do del "%F"');
}

gulp.task('send-mail', function (done) {
    var server = email.server.connect({
        user: mailConfig.user_email,
        password: mailConfig.password,
        host: "smtp-mail.outlook.com",
        timeout: 50000,
        tls: {
            ciphers: 'SSLv3'
        }
    });
    var sourcefolder = process.cwd() + '\\e2e';
    var destinationfolder = process.cwd() + '\\output';
    //console.log(' xcopy /e /v ' + sourcefolder + ' ' + destinationfolder + '')
    //shelljs.exec(' xcopy /e /v /EXCLUDE:excludecssfilelist.txt ' + sourcefolder + ' ' + destinationfolder + '')
    // zipFolder('./output', './output.zip', function (err) {
    //     if (err) {
    //         console.log('Error :', err);
    //         done()
    //     } else {
    //         console.log('Zipped folder');
    //     }
    // });
    var message = {
        from: mailConfig.user_email,
        to: mailConfig.to,
        cc: mailConfig.cc,
        subject: mailConfig.subject,
        attachment: [{
            data: ' ' + generateReport() + ' </b></b><b>Regards,</b> <br>' + mailConfig.user_name,
            alternative: true
        },
            // {
            //     path: './output.zip',
            //     type: 'application/zip',
            //     name: 'report.zip'
            // }
        ]
    };
    server.send(message, function (err) {
        if (err) {
            console.log('Error:  ', err);
            done()
        } else {
            console.log('Test report send Successfully');
           // removeGenFiles();
           // console.log('Bundled and difference files are removed from Repo');
            done();
        }
    });
});
