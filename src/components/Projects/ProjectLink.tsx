import React from 'react'
import ExternalLink from '@/components/Projects/ExternalLink'

function ProjectLink({externalLink}: {externalLink: string}) {
  return (
    <ExternalLink 
        link={externalLink}
        logoSrc="./icons/GitHubIcon.png"  
    >
        View project
    </ExternalLink>
  )
}

export default ProjectLink