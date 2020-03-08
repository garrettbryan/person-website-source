---
title: Gitalk
date: 2019-01-30 19:22:39
tags:
  - React
  - Commenting System
  - Contributing
cover: unformatted-html-markup.png
---
Gitalk is an open-source commenting system, and it's the one I use for this site. It relies on Github's commenting system, so I don't need to maintain an additional server.
#### Overview
Today's issue was "[Incorrect comment formatting for email replies. #224](https://github.com/gitalk/gitalk/issues/224)".
Github sends email notifications to issue subscribers when new comments are added to an issue. If a user replys to the email with only a comment message, then the comment message displays perfectly fine in Gitalk. If the user replys, but leaves the email thread beneath the comment message, then Gitalk will display unformatted HTML email markup. THe native Github behavior hides the extra message, so doesn't have this problem.
<p>{% asset_img native-github-behaivor.png  700 400 'Github native behavior' %} Github native behavior</p>
<p>{% asset_img unformatted-html-markup.png  700 400 'Gitalk behavior' %} Gitalk behavior</p>

#### Duplicating the issue
I tested Gitalk throughly, and was able to duplicate the problem very easily. I discovered that a comment string from an email, was html and not a plain string. Watching for DOM changes from the Github native behavior showed that an "extended" class was being added to an element causing it to reveal itself.

#### Getting My Bearings
Initially when I start with a new development project I read the README and look at the scripts, and try them out.
<p>{% asset_img scripts.png  700 400 'Gitalk scripts' %} Gitalk scripts</p>
Once I got the development server running locally, I started poking around the code.

#### Multiple Problem Areas
1. The first thing I discovered is that the imported css file was incomplete, it was missing all styling information for emailed comments. There are two potential locations to update the style info.
  1. Update the imported stylesheet. This stylesheet came from another repo. Submit a pull request to the repo.
  2. Add to the local styling rules to get the necessary classes.
2. Then I found the comment component was dumping the comment body straight into the DOM at render.

#### Solution
<p>{% asset_img solution.png  700 400 'CHange lifecycle' %} Lifecycle change</p>
I went with updating a few styling rules, and adding to the component lifecycle. Since React uses a diff to check for changes, I had to first shutoff updates. Next, I added a componentDidMount stage, where I was able to test the comment string for html and add listeners if needed. My goal was to quickly get a pull request in, so I could get a feel for the team dynamics.

#### Submitting the pull request
The build tools supplied with the project were great! The tests came back successful, so I submitted a pull request.

#### Future React Projects
I really enjoyed getting to know the React component lifecycle through Gitalk. The more I use React the more I grow to like it. This was my first contribution to a React project.