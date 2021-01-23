<!-- from main go into develop -->
git checkout develop

<!-- create new branch -->
git checkout -b feature/example_branch
<!-- REMEMBER THE '-b' BECAUSE YOU ARE CREATING A NEW BRANCH-->

<!-- do your changes -->
git add your stuff
git commit -m "commit"

<!-- push to your branch -->
git push origin feature/example_branch

*** MERGING ***

<!-- go into develop and do a git pull -->
git checkout develop
git pull origin develop

<!-- go into your branch -->
git checkout feature/example_branch

<!-- merge develop into your branch -->
git merge develop

<!-- resolve any conflicts -->
<!-- add and commit changes git add git commit -m etc -->
<!-- git push origin feature/example_branch -->

*** FINISH MERGING ***

<!-- move into develop -->
git checkout develop

<!-- pull develop -->
git pull origin develop

<!-- merge your branch into develop -->
git merge feature/example_branch

<!-- push to develop -->
git push origin develop