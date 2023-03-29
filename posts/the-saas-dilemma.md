---
title: 'the saas dilemma'
date: '28 March 2023'
description: 'the saas dilemma'
---
When I first set out to build Bruno, my goal was to create a lightweight alternative to Postman that companies could self-host. Over time, Postman had become bloated and slow, and even the open-source alternatives (insomnia,hoppscotch etc) had closed server-side implementations.

But as I continued building, I had an epiphany that changed the trajectory of the project forever. What if the folders and requests within the API collection could be mapped to folders and files on the filesystem? I spent months debating whether to create an offline client that works with plain text files or stick with the self-hosted model that involved saving API collections in a database.

Moving away from a server hosted model also meant that any future upside of offering a hosted saas platform no longer exists.

Ultimately, I realized that file-based API collections were the future. Unlike other tools, such as Postman or Insomnia, Bruno would allow users to maintain their collections in a source code repository using Git for collaboration.

The 3 core benefits that I saw in the offline file based model were
* **Colocation**: I believe that things that are cohesive (closely related to each other) should live together. Your API collections are nothing but living examples of how to use your api (a.k.a documentation). They should live in your source code repository. 
* **Git**: All the alternatives out there (postman/insomnia/paw/hoppscotch etc) shoehorn users to use a custom centralized proprietary version control for collaboration. On the other hand, File based api collections allow you to chose git for collaboration and store api collections in the source code repo itself.
* **Privacy**: The freedom of using git meant that you no longer needed to have your api collections stored on postman's (or any other saas provider) servers. File based api collections enables developers to move from centralised systems to decentralised systems.

I was excited to challenge the status quo and revolutionize the decade long norm set forth by postman on how developers collaborated on API collections. I chose the offline, file-based model and refactored our codebase to read and write directly to the filesystem.

Since our launch six months ago, Bruno has attracted over 1000 users, and over 300 stars on our github repo. The feedback and support has been exhilarating. 

I am reminded of a quote from the movie The Big Short by Micheal Burry. The subtlety here is that he uses the word **when** and not **if**

> "when" the bonds fail, I want to be certain of payment incase of insolvency issues with your bank.

I'm convinced that it's not a matter of **if**, but **when**, developers will adopt file-based API collections as the standard..

The clock is ticking.