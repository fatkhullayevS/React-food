import './settings.css'
import { SettingsNav } from './SettingsNav/SettingsNav'

export const Settings = () => {
    return (
        <div className="settings">
            <h3 className='ms-4 mt-4'>Settings</h3>
            <div className='row'>
                <div className='col-4'>
                    <SettingsNav />
                </div>
                <div className='col-8'>

                </div>
            </div>
        </div>
    )
}