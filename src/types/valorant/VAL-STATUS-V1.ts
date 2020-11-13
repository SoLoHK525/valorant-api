import { int } from '../alias';

interface PlatformDataDto {
    id: string;
    name: string;
    locales: string[];
    maintenances: StatusDto[];
    incidents: StatusDto[];
}

interface StatusDto {
    id: int;
    maintenance_status: string;
    incident_severity: string;
    titles: ContentDto[];
    updates: UpdateDto[];
}

interface ContentDto {
    locale: string;
    content: string;
}

interface UpdateDto {
    id: int;
    author: string;
    publish: boolean;
    publish_locations: string[];
    translations: ContentDto[];
    created_at: string;
    updated_at: string;
}

export { PlatformDataDto, StatusDto, ContentDto, UpdateDto };
