// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

/**
 * View handler contract
 */
export interface IViewHandler {
    /**
     * View handler method
     * @param view The view instance to handle
     * @param type The class of the view instance
     */
    handleView(view: any, type: FunctionConstructor): void;
}
