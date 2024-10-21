import BrandService from "@src/services/brand";
import { Context } from "@src/types/types";
import { CreateBrandInput, IBrand, LoginBrandInput, UpdateBrandInput } from "@src/types/brand";
import CompetitionService from "@src/services/competition";
import { ICompetition } from "@src/types/competition";
const queries = {
    getCurrentBrand: async (parent: any, args: any, context: Context) => {
        if (!context.brand) {
            throw new Error("Brand not authenticated");
        }
        const brand = await BrandService.getBrandById(context.brand._id as string);
        return brand;
    },
    getAllBrands: async (parent: any, args: any, context: Context) => {
        const brands = await BrandService.getAllBrands();
        return brands;
    },
    getBrandById: async (parent: any, { id }: { id: string }, context: Context) => {
        const brand = await BrandService.getBrandById(id);
        return brand;
    }
}

const mutations = {
    createBrand: async (parent: any, { payload }: { payload: CreateBrandInput }) => {
        const brand = await BrandService.createBrand(payload);
        return brand;
    },
    loginBrand: async (parent: any, { payload }: { payload: LoginBrandInput }) => {
        const brand = await BrandService.loginBrand(payload);
        if(!brand){
            throw new Error("Brand not found");
        }
        return brand;
    },
    updateBrand: async (parent: any, { payload }: { payload: UpdateBrandInput }, context: Context) => {
        const brand = await BrandService.updateBrand(payload, context);
        return brand;
    }
}

const extraResolvers = {
    Brand: {
        competitions: async (parent: IBrand, args: any, context: Context) => {
            return Promise.all(parent.competitions.map(async (competition: ICompetition) => {
                return CompetitionService.getCompetitionById(competition._id.toString(), context);
            }));
        }
    }
}

export const resolvers = {
    queries,
    mutations,
    extraResolvers
}
