# lamda-selenium
Selenium test that can be triggered inside AWS lamda


# Download Chromedriver executable

Execute fetchDependencies.sh under script folder

1. Setup AWS credentails by running command aws credentials
2. Install serverless (npm install -g serverless)
3. Deploy lamda function to AWS (serverless deploy -v)
4. Trigger your lamda function (serverless invoke -f Selenium -l --p event.json) 
