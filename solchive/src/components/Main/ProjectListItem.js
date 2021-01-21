import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './MainStyle.module.css';

class ProjectListItem extends Component {
    render() {
        const { id, title, team, period, summary, body_images } = this.props.info;
        return (
            <div className={style.project_item}>
                <Link to={`/projects/${id}`}>
                    <div className={style.project_contents}>
                        <div className={style.project_textarea}>
                            <div className={style.project_title_wrapper}>
                                <h4 className={style.project_title}>{title}</h4>
                            </div>
                        </div>
                        <div className={style.project_image_wrapper}>
                            <img src={'/upload/'+ body_images}/>
                        </div>
                    </div>
                    <div className={style.project_item_hover}>
                        <h4 className={style.project_title}>{title}</h4>
                        <div className={style.project_details}>
                            <span className={style.project_team}>{team}</span>
                        </div>
                        <p className={style.project_description}>{summary}</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default ProjectListItem;