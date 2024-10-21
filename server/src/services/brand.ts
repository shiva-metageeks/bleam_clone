import Brand from "@src/models/user/brand";
import { CreateBrandInput, LoginBrandInput, UpdateBrandInput} from "@src/types/brand";
import { Context } from "@src/types/types";
import JWTService from "@src/services/jwt";
import { JWTBrand } from "@src/types/types";

class BrandService {
    public static async createBrand(input: CreateBrandInput) {
        const brand = await Brand.create(input);
        const token = await JWTService.generateToken({id:brand._id,email:brand.email,role:"brand"} as JWTBrand);
        return token;
    }
    public static async loginBrand(input: LoginBrandInput) {
        const brand = await Brand.findOne({ email: input.email }).select("+password");
        if (!brand) {
            throw new Error("Brand not found");
        }
        const isMatch = brand.comparePassword(input.password);
        if (!isMatch) {
            throw new Error("Invalid password");
        }
        const token = brand.generateAuthToken();
        return token;
    }
    public static async updateBrand(input: UpdateBrandInput, context: Context) {
        if(!context.brand || !context.brand.id){
            throw new Error("Brand not found");
        }
        const brand = await Brand.findByIdAndUpdate(context.brand.id, input, { new: true });
        return brand;
    }
    public static async getBrandById(id: string) {
        const brand = await Brand.findById(id);
        return brand;
    }
    public static async getAllBrands() {
        const brands = await Brand.find();
        return brands;
    }
}

export default BrandService; 