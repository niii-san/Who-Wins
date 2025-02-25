/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root"
import { Route as LayoutImport } from "./routes/_layout"
import { Route as LayoutIndexImport } from "./routes/_layout/index"
import { Route as LayoutAuthenticatedImport } from "./routes/_layout/_authenticated"
import { Route as LayoutauthSignupImport } from "./routes/_layout/(auth)/signup"
import { Route as LayoutauthLoginImport } from "./routes/_layout/(auth)/login"
import { Route as LayoutAuthenticatedSettingsIndexImport } from "./routes/_layout/_authenticated/settings/index"
import { Route as LayoutAuthenticatedJoinIndexImport } from "./routes/_layout/_authenticated/join/index"
import { Route as LayoutAuthenticatedEventsIndexImport } from "./routes/_layout/_authenticated/events/index"
import { Route as LayoutAuthenticatedSettingsUpdatePasswordImport } from "./routes/_layout/_authenticated/settings/update-password"
import { Route as LayoutAuthenticatedJoinEventIdImport } from "./routes/_layout/_authenticated/join/$eventId"
import { Route as LayoutAuthenticatedEventsCreateImport } from "./routes/_layout/_authenticated/events/create"
import { Route as LayoutAuthenticatedEventsEventIdImport } from "./routes/_layout/_authenticated/events/$eventId"

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: "/_layout",
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAuthenticatedRoute = LayoutAuthenticatedImport.update({
  id: "/_authenticated",
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutauthSignupRoute = LayoutauthSignupImport.update({
  id: "/(auth)/signup",
  path: "/signup",
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutauthLoginRoute = LayoutauthLoginImport.update({
  id: "/(auth)/login",
  path: "/login",
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAuthenticatedSettingsIndexRoute =
  LayoutAuthenticatedSettingsIndexImport.update({
    id: "/settings/",
    path: "/settings/",
    getParentRoute: () => LayoutAuthenticatedRoute,
  } as any)

const LayoutAuthenticatedJoinIndexRoute =
  LayoutAuthenticatedJoinIndexImport.update({
    id: "/join/",
    path: "/join/",
    getParentRoute: () => LayoutAuthenticatedRoute,
  } as any)

const LayoutAuthenticatedEventsIndexRoute =
  LayoutAuthenticatedEventsIndexImport.update({
    id: "/events/",
    path: "/events/",
    getParentRoute: () => LayoutAuthenticatedRoute,
  } as any)

const LayoutAuthenticatedSettingsUpdatePasswordRoute =
  LayoutAuthenticatedSettingsUpdatePasswordImport.update({
    id: "/settings/update-password",
    path: "/settings/update-password",
    getParentRoute: () => LayoutAuthenticatedRoute,
  } as any)

const LayoutAuthenticatedJoinEventIdRoute =
  LayoutAuthenticatedJoinEventIdImport.update({
    id: "/join/$eventId",
    path: "/join/$eventId",
    getParentRoute: () => LayoutAuthenticatedRoute,
  } as any)

const LayoutAuthenticatedEventsCreateRoute =
  LayoutAuthenticatedEventsCreateImport.update({
    id: "/events/create",
    path: "/events/create",
    getParentRoute: () => LayoutAuthenticatedRoute,
  } as any)

const LayoutAuthenticatedEventsEventIdRoute =
  LayoutAuthenticatedEventsEventIdImport.update({
    id: "/events/$eventId",
    path: "/events/$eventId",
    getParentRoute: () => LayoutAuthenticatedRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_layout": {
      id: "/_layout"
      path: ""
      fullPath: ""
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    "/_layout/_authenticated": {
      id: "/_layout/_authenticated"
      path: ""
      fullPath: ""
      preLoaderRoute: typeof LayoutAuthenticatedImport
      parentRoute: typeof LayoutImport
    }
    "/_layout/": {
      id: "/_layout/"
      path: "/"
      fullPath: "/"
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    "/_layout/(auth)/login": {
      id: "/_layout/(auth)/login"
      path: "/login"
      fullPath: "/login"
      preLoaderRoute: typeof LayoutauthLoginImport
      parentRoute: typeof LayoutImport
    }
    "/_layout/(auth)/signup": {
      id: "/_layout/(auth)/signup"
      path: "/signup"
      fullPath: "/signup"
      preLoaderRoute: typeof LayoutauthSignupImport
      parentRoute: typeof LayoutImport
    }
    "/_layout/_authenticated/events/$eventId": {
      id: "/_layout/_authenticated/events/$eventId"
      path: "/events/$eventId"
      fullPath: "/events/$eventId"
      preLoaderRoute: typeof LayoutAuthenticatedEventsEventIdImport
      parentRoute: typeof LayoutAuthenticatedImport
    }
    "/_layout/_authenticated/events/create": {
      id: "/_layout/_authenticated/events/create"
      path: "/events/create"
      fullPath: "/events/create"
      preLoaderRoute: typeof LayoutAuthenticatedEventsCreateImport
      parentRoute: typeof LayoutAuthenticatedImport
    }
    "/_layout/_authenticated/join/$eventId": {
      id: "/_layout/_authenticated/join/$eventId"
      path: "/join/$eventId"
      fullPath: "/join/$eventId"
      preLoaderRoute: typeof LayoutAuthenticatedJoinEventIdImport
      parentRoute: typeof LayoutAuthenticatedImport
    }
    "/_layout/_authenticated/settings/update-password": {
      id: "/_layout/_authenticated/settings/update-password"
      path: "/settings/update-password"
      fullPath: "/settings/update-password"
      preLoaderRoute: typeof LayoutAuthenticatedSettingsUpdatePasswordImport
      parentRoute: typeof LayoutAuthenticatedImport
    }
    "/_layout/_authenticated/events/": {
      id: "/_layout/_authenticated/events/"
      path: "/events"
      fullPath: "/events"
      preLoaderRoute: typeof LayoutAuthenticatedEventsIndexImport
      parentRoute: typeof LayoutAuthenticatedImport
    }
    "/_layout/_authenticated/join/": {
      id: "/_layout/_authenticated/join/"
      path: "/join"
      fullPath: "/join"
      preLoaderRoute: typeof LayoutAuthenticatedJoinIndexImport
      parentRoute: typeof LayoutAuthenticatedImport
    }
    "/_layout/_authenticated/settings/": {
      id: "/_layout/_authenticated/settings/"
      path: "/settings"
      fullPath: "/settings"
      preLoaderRoute: typeof LayoutAuthenticatedSettingsIndexImport
      parentRoute: typeof LayoutAuthenticatedImport
    }
  }
}

// Create and export the route tree

interface LayoutAuthenticatedRouteChildren {
  LayoutAuthenticatedEventsEventIdRoute: typeof LayoutAuthenticatedEventsEventIdRoute
  LayoutAuthenticatedEventsCreateRoute: typeof LayoutAuthenticatedEventsCreateRoute
  LayoutAuthenticatedJoinEventIdRoute: typeof LayoutAuthenticatedJoinEventIdRoute
  LayoutAuthenticatedSettingsUpdatePasswordRoute: typeof LayoutAuthenticatedSettingsUpdatePasswordRoute
  LayoutAuthenticatedEventsIndexRoute: typeof LayoutAuthenticatedEventsIndexRoute
  LayoutAuthenticatedJoinIndexRoute: typeof LayoutAuthenticatedJoinIndexRoute
  LayoutAuthenticatedSettingsIndexRoute: typeof LayoutAuthenticatedSettingsIndexRoute
}

const LayoutAuthenticatedRouteChildren: LayoutAuthenticatedRouteChildren = {
  LayoutAuthenticatedEventsEventIdRoute: LayoutAuthenticatedEventsEventIdRoute,
  LayoutAuthenticatedEventsCreateRoute: LayoutAuthenticatedEventsCreateRoute,
  LayoutAuthenticatedJoinEventIdRoute: LayoutAuthenticatedJoinEventIdRoute,
  LayoutAuthenticatedSettingsUpdatePasswordRoute:
    LayoutAuthenticatedSettingsUpdatePasswordRoute,
  LayoutAuthenticatedEventsIndexRoute: LayoutAuthenticatedEventsIndexRoute,
  LayoutAuthenticatedJoinIndexRoute: LayoutAuthenticatedJoinIndexRoute,
  LayoutAuthenticatedSettingsIndexRoute: LayoutAuthenticatedSettingsIndexRoute,
}

const LayoutAuthenticatedRouteWithChildren =
  LayoutAuthenticatedRoute._addFileChildren(LayoutAuthenticatedRouteChildren)

interface LayoutRouteChildren {
  LayoutAuthenticatedRoute: typeof LayoutAuthenticatedRouteWithChildren
  LayoutIndexRoute: typeof LayoutIndexRoute
  LayoutauthLoginRoute: typeof LayoutauthLoginRoute
  LayoutauthSignupRoute: typeof LayoutauthSignupRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutAuthenticatedRoute: LayoutAuthenticatedRouteWithChildren,
  LayoutIndexRoute: LayoutIndexRoute,
  LayoutauthLoginRoute: LayoutauthLoginRoute,
  LayoutauthSignupRoute: LayoutauthSignupRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  "": typeof LayoutAuthenticatedRouteWithChildren
  "/": typeof LayoutIndexRoute
  "/login": typeof LayoutauthLoginRoute
  "/signup": typeof LayoutauthSignupRoute
  "/events/$eventId": typeof LayoutAuthenticatedEventsEventIdRoute
  "/events/create": typeof LayoutAuthenticatedEventsCreateRoute
  "/join/$eventId": typeof LayoutAuthenticatedJoinEventIdRoute
  "/settings/update-password": typeof LayoutAuthenticatedSettingsUpdatePasswordRoute
  "/events": typeof LayoutAuthenticatedEventsIndexRoute
  "/join": typeof LayoutAuthenticatedJoinIndexRoute
  "/settings": typeof LayoutAuthenticatedSettingsIndexRoute
}

export interface FileRoutesByTo {
  "": typeof LayoutAuthenticatedRouteWithChildren
  "/": typeof LayoutIndexRoute
  "/login": typeof LayoutauthLoginRoute
  "/signup": typeof LayoutauthSignupRoute
  "/events/$eventId": typeof LayoutAuthenticatedEventsEventIdRoute
  "/events/create": typeof LayoutAuthenticatedEventsCreateRoute
  "/join/$eventId": typeof LayoutAuthenticatedJoinEventIdRoute
  "/settings/update-password": typeof LayoutAuthenticatedSettingsUpdatePasswordRoute
  "/events": typeof LayoutAuthenticatedEventsIndexRoute
  "/join": typeof LayoutAuthenticatedJoinIndexRoute
  "/settings": typeof LayoutAuthenticatedSettingsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  "/_layout": typeof LayoutRouteWithChildren
  "/_layout/_authenticated": typeof LayoutAuthenticatedRouteWithChildren
  "/_layout/": typeof LayoutIndexRoute
  "/_layout/(auth)/login": typeof LayoutauthLoginRoute
  "/_layout/(auth)/signup": typeof LayoutauthSignupRoute
  "/_layout/_authenticated/events/$eventId": typeof LayoutAuthenticatedEventsEventIdRoute
  "/_layout/_authenticated/events/create": typeof LayoutAuthenticatedEventsCreateRoute
  "/_layout/_authenticated/join/$eventId": typeof LayoutAuthenticatedJoinEventIdRoute
  "/_layout/_authenticated/settings/update-password": typeof LayoutAuthenticatedSettingsUpdatePasswordRoute
  "/_layout/_authenticated/events/": typeof LayoutAuthenticatedEventsIndexRoute
  "/_layout/_authenticated/join/": typeof LayoutAuthenticatedJoinIndexRoute
  "/_layout/_authenticated/settings/": typeof LayoutAuthenticatedSettingsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ""
    | "/"
    | "/login"
    | "/signup"
    | "/events/$eventId"
    | "/events/create"
    | "/join/$eventId"
    | "/settings/update-password"
    | "/events"
    | "/join"
    | "/settings"
  fileRoutesByTo: FileRoutesByTo
  to:
    | ""
    | "/"
    | "/login"
    | "/signup"
    | "/events/$eventId"
    | "/events/create"
    | "/join/$eventId"
    | "/settings/update-password"
    | "/events"
    | "/join"
    | "/settings"
  id:
    | "__root__"
    | "/_layout"
    | "/_layout/_authenticated"
    | "/_layout/"
    | "/_layout/(auth)/login"
    | "/_layout/(auth)/signup"
    | "/_layout/_authenticated/events/$eventId"
    | "/_layout/_authenticated/events/create"
    | "/_layout/_authenticated/join/$eventId"
    | "/_layout/_authenticated/settings/update-password"
    | "/_layout/_authenticated/events/"
    | "/_layout/_authenticated/join/"
    | "/_layout/_authenticated/settings/"
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/_authenticated",
        "/_layout/",
        "/_layout/(auth)/login",
        "/_layout/(auth)/signup"
      ]
    },
    "/_layout/_authenticated": {
      "filePath": "_layout/_authenticated.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/_authenticated/events/$eventId",
        "/_layout/_authenticated/events/create",
        "/_layout/_authenticated/join/$eventId",
        "/_layout/_authenticated/settings/update-password",
        "/_layout/_authenticated/events/",
        "/_layout/_authenticated/join/",
        "/_layout/_authenticated/settings/"
      ]
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/(auth)/login": {
      "filePath": "_layout/(auth)/login.tsx",
      "parent": "/_layout"
    },
    "/_layout/(auth)/signup": {
      "filePath": "_layout/(auth)/signup.tsx",
      "parent": "/_layout"
    },
    "/_layout/_authenticated/events/$eventId": {
      "filePath": "_layout/_authenticated/events/$eventId.tsx",
      "parent": "/_layout/_authenticated"
    },
    "/_layout/_authenticated/events/create": {
      "filePath": "_layout/_authenticated/events/create.tsx",
      "parent": "/_layout/_authenticated"
    },
    "/_layout/_authenticated/join/$eventId": {
      "filePath": "_layout/_authenticated/join/$eventId.tsx",
      "parent": "/_layout/_authenticated"
    },
    "/_layout/_authenticated/settings/update-password": {
      "filePath": "_layout/_authenticated/settings/update-password.tsx",
      "parent": "/_layout/_authenticated"
    },
    "/_layout/_authenticated/events/": {
      "filePath": "_layout/_authenticated/events/index.tsx",
      "parent": "/_layout/_authenticated"
    },
    "/_layout/_authenticated/join/": {
      "filePath": "_layout/_authenticated/join/index.tsx",
      "parent": "/_layout/_authenticated"
    },
    "/_layout/_authenticated/settings/": {
      "filePath": "_layout/_authenticated/settings/index.tsx",
      "parent": "/_layout/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
