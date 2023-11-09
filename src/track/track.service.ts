import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model, Types} from "mongoose";
import {Track, TrackDocument} from "./schema/track.schema";
import {Comment, CommentDocument} from "./schema/comment.schema";
import {CreateTrackDto} from "./DataTransferObject/create-track.dto";
import ObjectId = module


@Injectable()
export class TrackService{
    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}
    async create (dto: CreateTrackDto): Promise<Track>{
        const track= await this.trackModel.create({...dto, listens: 0})
        return track;
    }
    async getAll (): Promise<Track[]>{
        const tracks = await this.trackModel.find();
        return tracks;
    }
    async getOne (id: ObjectId){
        const track = await this.trackModel.findById(id);
        return track;
    }
    async delete (){

    }
}