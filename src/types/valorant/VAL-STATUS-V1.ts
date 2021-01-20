import { int } from '../alias';

export interface PlatformDataDto {
    id: string;
    name: string;
    locales: string[];
    maintenances: StatusDto[];
    incidents: StatusDto[];
}

export interface StatusDto {
    id: int;
    maintenance_status: string;
    incident_severity: string;
    titles: ContentDto[];
    updates: UpdateDto[];
}

export interface ContentDto {
    locale: string;
    content: string;
}

export interface UpdateDto {
    id: int;
    author: string;
    publish: boolean;
    publish_locations: string[];
    translations: ContentDto[];
    created_at: string;
    updated_at: string;
}
