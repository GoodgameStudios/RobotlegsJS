// ------------------------------------------------------------------------------
//  Copyright (c) 2009-2013 the original author or authors. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IMediatorUnmapper } from "../dsl/IMediatorUnmapper";

/**
 * @private
 */
export class NullMediatorUnmapper implements IMediatorUnmapper {

    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/

    /**
     * @private
     */
    public fromMediator(mediatorClass: FunctionConstructor): void {
    }

    /**
     * @private
     */
    public fromAll(): void {
    }
}
