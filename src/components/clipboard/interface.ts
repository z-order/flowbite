import { CopyClipboardOptions } from './types';

export declare interface CopyClipboardInterface {
    _triggerEl: HTMLElement | null;
    _targetEl: HTMLElement | null;
    _options: CopyClipboardOptions;

    init(): void;
    copy(): string;

    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
}
