type LinkTarget = '_blank' | '_self' | '_parent' | '_top'
type LinkRel    = 'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'next' | 'nofollow' | 'noreferrer' | 'noopener' | 'prev' | 'search' | 'tag'

export interface ILink {
    label?:     string;
    ariaLabel?: string;
    location:   string;
    target?:    LinkTarget;
    rel?:       LinkRel;
}

export type TLink  = ILink;
export type TLinks = ILink[];
export type TLinkExtendable  = ILink & Record<string, unknown>;
export type TLinksExtendable = TLinkExtendable[];

const exampleLink : TLink = {
    label:      'Google',
    ariaLabel:  'Google',
    location:   'https://www.google.com',
    target:     '_blank',
    rel:        'nofollow',
}

const exampleLinkExtendable : TLinkExtendable = {
    label:      'Google',
    ariaLabel:  'Google',
    location:   'https://www.google.com',
    target:     '_blank',
    rel:        'nofollow',
    foo:        'bar',
}