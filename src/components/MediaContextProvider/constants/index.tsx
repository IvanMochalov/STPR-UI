import {Context, createContext} from "react";

import {IMediaContext} from "../types";

export const MediaContext: Context<IMediaContext | null> = createContext(null);