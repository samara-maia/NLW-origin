const LinksSocialMedia = {
    github: 'Samara-rbd',
    youtube: 'maykbrito',
    fecebook: 'maykbrito',
    instagram: 'maykbrito',
    twitter: 'maykbrito'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children){
        const social = li.getAttribute('class')   
      
        li.children[0].href = `https:${social}.com/${LinksSocialMedia [socials]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    
    fetch(url)
    
}

getGitHubProfileInfos()
