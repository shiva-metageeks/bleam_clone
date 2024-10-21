import { Competition } from "@/hooks/competition/types";

export interface CurrentBrandQueryResult {
    getCurrentBrand: {
        name: string;
        bio: string;
        email: string;
        website: string;
        profileImageUrl: string;
        organizationName: string;
        competitions: Competition[];
    }
}