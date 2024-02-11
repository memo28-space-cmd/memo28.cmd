/*
 * @Author: @memo28.repo
 * @Date: 2024-02-11 20:13:27
 * @LastEditTime: 2024-02-11 20:20:07
 * @Description: 
 * @FilePath: /cmdRepo/packages/dynamicallyGeneratePages/__test__/defineConfig.test.ts
 */
import { describe, expect, it } from 'vitest';
import { defineConfig, defineConfigTypes } from '../src';

describe('defineConfig', () => {
    it('should return the correct config object', () => {
        // Arrange
        const opt: defineConfigTypes = {
            subPackagesRules: ['subPackagesRules'],
            mainPackageRules: ['mainPackageRules'],
            rootPagesJsonPath: 'rootPagesJsonPath',
            whetherMakeUpTheConfig: true,
            whetherMakeUpTheConfigFileSuffix: 'js',
            generateClaimsRoute: ""
        };

        // Act

        // Assert
        expect(() => {
            defineConfig(opt)
        }).toThrowError("subPackagesRules字段路径文件不存在");
    });

    it('should throw an error if whetherMakeUpTheConfigFileSuffix is not provided', () => {
        // Arrange
        const opt: defineConfigTypes = {
            subPackagesRules: ['subPackagesRules'],
            mainPackageRules: ['mainPackageRules'],
            rootPagesJsonPath: 'rootPagesJsonPath',
            whetherMakeUpTheConfig: true,
            generateClaimsRoute: ""
        };

        // Act & Assert
        expect(() => defineConfig(opt)).toThrowError('subPackagesRules字段路径文件不存在 -> subPackagesRules');
    });

    it('should throw an error if whetherMakeUpTheConfigFileSuffix is not valid', () => {
        // Arrange
        const opt: defineConfigTypes = {
            subPackagesRules: ['subPackagesRules'],
            mainPackageRules: ['mainPackageRules'],
            rootPagesJsonPath: 'rootPagesJsonPath',
            whetherMakeUpTheConfig: true,
            whetherMakeUpTheConfigFileSuffix: 'ts',
            generateClaimsRoute: ""
        };

        // Act & Assert
        expect(() => defineConfig(opt)).toThrowError('subPackagesRules字段路径文件不存在');

    });
});