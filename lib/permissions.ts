import { getSession } from "@/services/user.service";

const getPermissionSet = (): Set<string> => {
  const { userPermissions } = getSession();
  return new Set(userPermissions);
};

export const hasPermission = (permission: string): boolean => {
  const permissionSet = getPermissionSet();
  return permissionSet.has(permission);
};

export const hasAnyPermission = (permissions: string[]): boolean => {
  const permissionSet = getPermissionSet();
  return permissions.some((permission) => permissionSet.has(permission));
};

export const filterByPermission = <T extends { permission?: string }>(
  items: T[],
): T[] => {
  const permissionSet = getPermissionSet();
  return items.filter(
    (item) => !item.permission || permissionSet.has(item.permission),
  );
};
