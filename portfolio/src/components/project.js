import React,{Component} from 'react'
import ProjectCard from './project_card'

class Project extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        this.fetch_github_project('edisonmndza')
    }
    async fetch_github_project(username){
        let response = await fetch(`https://api.github.com/users/${username}/repos`)
        let data = await response.json()
        this.setState({projects: [...data]})
        console.log(this.state.projects)
    }

    render() {
        return(<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {this.state.projects.map(project => {
                return(<ProjectCard key={project.id} 
                                    title={project.full_name}
                                    />) 
            })}
        </div>)
    }
}

export default Project