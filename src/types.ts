declare module namespace {

    export interface VisionApiModel {
        FaceId:           string;
        RecognitionModel: null;
        FaceRectangle:    FaceRectangle;
        FaceLandmarks:    null;
        FaceAttributes:   FaceAttributes;
    }
    
    export interface FaceAttributes {
        Age:                   number;
        Gender:                number;
        Smile:                 number;
        FacialHair:            FacialHair;
        Glasses:               number;
        HeadPose:              HeadPose;
        Emotion:               Emotion;
        Hair:                  Hair;
        Makeup:                Makeup;
        Occlusion:             null;
        Accessories:           any[];
        Blur:                  null;
        Exposure:              null;
        Noise:                 null;
        Mask:                  null;
        QualityForRecognition: null;
    }
    
    export interface Emotion {
        Anger:     number;
        Contempt:  number;
        Disgust:   number;
        Fear:      number;
        Happiness: number;
        Neutral:   number;
        Sadness:   number;
        Surprise:  number;
    }
    
    export interface FacialHair {
        Moustache: number;
        Beard:     number;
        Sideburns: number;
    }
    
    export interface Hair {
        Bald:      number;
        Invisible: boolean;
        HairColor: HairColor[];
    }
    
    export interface HairColor {
        Color:      number;
        Confidence: number;
    }
    
    export interface HeadPose {
        Roll:  number;
        Yaw:   number;
        Pitch: number;
    }
    
    export interface Makeup {
        EyeMakeup: boolean;
        LipMakeup: boolean;
    }
    
    export interface FaceRectangle {
        Width:  number;
        Height: number;
        Left:   number;
        Top:    number;
    }

}

