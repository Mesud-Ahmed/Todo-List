import './styles.css'

import { setupFormToggles, updateProjectSelect } from './modules/eventHandlers';
import { displayProjects } from './modules/dom';

document.addEventListener('DOMContentLoaded', () => {
    setupFormToggles();
    displayProjects();
    updateProjectSelect();
});
