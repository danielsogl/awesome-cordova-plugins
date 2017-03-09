export interface MediaError {
    code: number;
    message: string;
}
export declare class MediaPlugin {
    /**
     * @private
     */
    static MEDIA_NONE: number;
    /**
     * @private
     */
    static MEDIA_STARTING: number;
    /**
     * @private
     */
    static MEDIA_RUNNING: number;
    /**
     * @private
     */
    static MEDIA_PAUSED: number;
    /**
     * @private
     */
    static MEDIA_STOPPED: number;
    /**
     * @private
     */
    static MEDIA_ERR_ABORTED: number;
    /**
     * @private
     */
    static MEDIA_ERR_NETWORK: number;
    /**
     * @private
     */
    static MEDIA_ERR_DECODE: number;
    /**
     * @private
     */
    static MEDIA_ERR_NONE_SUPPORTED: number;
    private _objectInstance;
    init: Promise<any>;
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     * @param onStatusUpdate {Function} A callback function to be invoked when the status of the file changes
     */
    constructor(src: string, onStatusUpdate?: Function);
    /**
     * Get the current amplitude of the current recording.
     * @returns {Promise} Returns a promise with the amplitude of the current recording
     */
    getCurrentAmplitude(): Promise<any>;
    /**
     * Get the current position within an audio file. Also updates the Media object's position parameter.
     * @returns {Promise} Returns a promise with the position of the current recording
     */
    getCurrentPosition(): Promise<any>;
    /**
     * Get the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
     * @returns {Promise} Returns a promise with the duration of the current recording
     */
    getDuration(): number;
    /**
     * Starts or resumes playing an audio file.
     */
    play(iosOptions?: {
        numberOfLoops?: number;
        playAudioWhenScreenIsLocked?: boolean;
    }): void;
    /**
     * Pauses playing an audio file.
     */
    pause(): void;
    /**
     * Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
     */
    release(): void;
    /**
     * Sets the current position within an audio file.
     * @param {number} milliseconds The time position you want to set for the current audio file
     */
    seekTo(milliseconds: number): void;
    /**
     * Set the volume for an audio file.
     * @param volume The volume to set for playback. The value must be within the range of 0.0 to 1.0.
     */
    setVolume(volume: number): void;
    /**
     * Starts recording an audio file.
     */
    startRecord(): void;
    /**
     * Stops recording
     */
    stopRecord(): void;
    /**
     * Stops playing an audio file.
     */
    stop(): void;
}
