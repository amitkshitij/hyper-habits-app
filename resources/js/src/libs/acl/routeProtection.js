import ability from './ability'

export const canNavigate = to => to.matched.some(route => {
  // If no resource is defined on route meta, allow access (treat as public/unprotected)
  if (!route.meta || !route.meta.resource) return true
  return ability.can(route.meta.action || 'read', route.meta.resource)
})

export const _ = undefined
