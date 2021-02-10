/*
 * Copyright 1999-2021 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.alibaba.chaosblade.platform.http.parser;

import com.alibaba.chaosblade.platform.http.model.BladeModels;
import org.yaml.snakeyaml.Yaml;
import org.yaml.snakeyaml.constructor.Constructor;

import java.io.IOException;
import java.io.InputStream;

/**
 * @author Changjun Xiao
 */
public abstract class BaseYamlService implements YamlService {

    protected InputStream inputStream;

    @Override
    public void close() {
        if (inputStream != null) {
            try {
                inputStream.close();
            } catch (IOException e) {
            }
        }
    }

    @Override
    public BladeModels parse(String source) {
        try {
            Yaml yaml = new Yaml(new Constructor(BladeModels.class));
            inputStream = getInputStream(source);
            if (inputStream == null) {
                return null;
            }
            return yaml.load(inputStream);
        } finally {
            close();
        }
    }
}