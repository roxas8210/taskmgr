import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = ( ir: MdIconRegistry, ds: DomSanitizer ) => {
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/projects.svg'));
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/project.svg'));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/month.svg'));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/week.svg'));
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/day.svg'));
};
