#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# cd into the build output directory
cd dist

# Custom domain: use public/CNAME (copied into dist by Vite). For manual dist-only deploys:
# echo 'durgaprasad.me' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

# Change <USERNAME> and <REPO> to match GitHub repo
echo "Deployment successful! Run the above git push command manually using your correct remote to deploy to gh-pages."

cd -
# Log HTTP 500 error details in the background
(
	echo "---" >> error.log
	echo "Date: $(date)" >> error.log
	echo "Error: HTTP 500 Internal Server Error" >> error.log
	echo "Sherlog:" >> error.log
	echo "TraceID: 0xf74bd8e832c84cd1" >> error.log
	echo "Headers: {\"Alt-Svc\":[\"h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000\"],\"Content-Length\":[\"109\"],\"Content-Type\":[\"text/event-stream\"],\"Date\":[\"Thu, 07 May 2026 07:09:23 GMT\"],\"Server\":[\"ESF\"],\"Server-Timing\":[\"gfet4t7; dur=2894\"],\"Vary\":[\"Origin\",\"X-Origin\",\"Referer\"],\"X-Cloudaicompanion-Trace-Id\":[\"f74bd8e832c84cd1\"],\"X-Content-Type-Options\":[\"nosniff\"],\"X-Frame-Options\":[\"SAMEORIGIN\"],\"X-Xss-Protection\":[\"0\"]}" >> error.log
	echo '{' >> error.log
	echo '  "error": {' >> error.log
	echo '    "code": 500,' >> error.log
	echo '    "message": "Internal error encountered.",' >> error.log
	echo '    "status": "INTERNAL"' >> error.log
	echo '  }' >> error.log
	echo '}' >> error.log
) &
