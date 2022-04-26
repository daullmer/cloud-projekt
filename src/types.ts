declare module namespace {

    export interface FaceRectangle {
        width: number;
        height: number;
        left: number;
        top: number;
    }

    export interface FacialHair {
        moustache: number;
        beard: number;
        sideburns: number;
    }

    export interface HeadPose {
        roll: number;
        yaw: number;
        pitch: number;
    }

    export interface Emotion {
        anger: number;
        contempt: number;
        disgust: number;
        fear: number;
        happiness: number;
        neutral: number;
        sadness: number;
        surprise: number;
    }

    export interface HairColor {
        color: number;
        confidence: number;
    }

    export interface Hair {
        bald: number;
        invisible: boolean;
        hairColor: HairColor[];
    }

    export interface Makeup {
        eyeMakeup: boolean;
        lipMakeup: boolean;
    }

    export interface FaceAttributes {
        age: number;
        gender: number;
        smile: number;
        facialHair: FacialHair;
        glasses: number;
        headPose: HeadPose;
        emotion: Emotion;
        hair: Hair;
        makeup: Makeup;
        occlusion?: any;
        accessories: any[];
        blur?: any;
        exposure?: any;
        noise?: any;
        mask?: any;
        qualityForRecognition?: any;
    }

    export interface VisionApiModel {
        faceId: string;
        recognitionModel?: any;
        faceRectangle: FaceRectangle;
        faceLandmarks?: any;
        faceAttributes: FaceAttributes;
    }

}

