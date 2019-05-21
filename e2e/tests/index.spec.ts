let os = require('os');
let fs = require('fs');
let shelljs = require('shelljs');
let report: any = {};
report['Consolidate Report'] = [];
report['Detailed Report'] = [];
let totalTestcase: number = 0;
let totalPassCount: number = 0;
let failures = {};
let failCount: number = 0;
shelljs.exec('mkdir output');
jasmine.getEnv().clearReporters(); //remove default reporter logs
jasmine.getEnv().addReporter(  // get CustomeJasmine Spec report
  {
    specDone: (result) => {
      ++totalTestcase;
      totalPassCount += result.status === "passed" ? result.passedExpectations.length : 0;
      failCount += result.status === "failed" ? result.failedExpectations.length : 0;
      console.log("Fail Count -> " + failCount);
      failures['Total Failure'] = failCount; 
      let failureMessage = "";
      let failurStack = "";
      const component = result.description.split(" ")[0];
      if (failures[component] != undefined) {
        failures[component] += result.status === "failed" ? result.failedExpectations.length : 0;
      } else { failures[component] = result.failedExpectations.length; }
      result.failedExpectations.forEach((failure: any) => {
        failureMessage += "<div>" + failure.message + "</div>";
        failurStack += "<div>" + failure.stack + "</div>";
      })
      report['Detailed Report'].push({
        "Test-cases": result.fullName,
        "Status": '<div class=\"' + result.status + '\">' + result.status + '</div>',
        "Pass/Fail Count": '<div class=\"' + result.status + '\">' + result.status + ' count ->' + (result.status === 'passed' ? result.passedExpectations.length : result.failedExpectations.length) + '</div>',
        "<div class='failed'>Failure-Message</div>": '<div class=\"' + result.status + '\">' + failureMessage + '</div>',
      });
      report['Consolidate Report'] = {
        "Machine Name": os.hostname(),
        "Operating System": os.type(),
        "Running Dir": process.cwd(),
        "Total Spec Count": totalTestcase,
        "Total testcase Pass": '<div class=\"passed\">' + totalPassCount + '</div>',
        "Total testcase failed": failures,
        "Difference Image Count": [{
          "Chrome": 0,
          "FireFox": 0,
          "Internet Explorer": 0,
          "Microsoft Edge": 0,
        }],
      }
      fs.writeFileSync('./output/config.json', JSON.stringify(report));
    }
  }
);